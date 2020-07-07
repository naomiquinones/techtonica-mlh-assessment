import React from 'react';
import './App.css';
import './components/Algorithms.js';
import Algorithms from './components/Algorithms.js';
import SortingButtons from './components/SortingButtons';
import rawData from './data';
// transform data to make datestr into date object
const data = rawData;

function App() {
  const [displayData, setDisplayData] = React.useState(data);
  const [showStable, setShowStable] = React.useState(false);
  const [sortOrder, setSortOrder] = React.useState("default");

  React.useEffect( () => {
    const filtered = showStable ? data.filter( item => item.stable ): data;
    let sorted;
    switch (sortOrder) {
      case 'a-z':
        sorted = [...filtered];
        sorted.sort( (a,b) => (a.name < b.name) ? -1 : 
          (a.name > b.name) ? 1 :
          0
        );
        break;
      case 'recently-added':
        sorted = [...filtered];
        // sort by a.addedOn > b.addedOn 
        sorted.sort( (a,b) => ( Date.parse(a.addedOn) > Date.parse(b.addedOn) ) ? -1 :
          ( Date.parse(a.addedOn) < Date.parse(b.addedOn) ) ? 1 :
          0
        );
        break;
      default:
        sorted = filtered;
    }
    setDisplayData(sorted);
  },[showStable,sortOrder])
  
  return (
    <div className="App">
      <header className="app-header">
        <h1>Algorithms</h1>
      </header>
      <main id="content">
        <p className="count">Displaying {displayData.length} of {data.length} algorithms.</p>
        <SortingButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <FilterCheckbox showStable={showStable} setShowStable={setShowStable} />
        <Algorithms data={displayData} />
      </main>
      <footer className="app-footer">
        Copyright &copy; 2020 NQ
      </footer>
    </div>
  );
}

const FilterCheckbox = ({showStable, setShowStable}) => {
  return (
    <form className="filter-form">
      <label className="filter-label">
        <input 
          type="checkbox" 
          name="filter" 
          className="filter-checkbox"
          onChange={ e => {
            setShowStable(!showStable);
          }}
          checked={showStable}
        />
        Show only stable algorithms
      </label>
    </form>
  )
}


export default App;
