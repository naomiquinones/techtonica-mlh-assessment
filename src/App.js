import React, { useState } from 'react';
import './App.css';
import './components/Algorithms.js';
import Algorithms from './components/Algorithms.js';
import SortingButtons from './components/SortingButtons';

function App() {
  const [showStable, setShowStable] = useState(false);

  const handleClick = () => setShowStable(showStable => !showStable);
  
  return (
    <div className="App">
      <header className="app-header">
        <h1>Algorithms</h1>
      </header>
      <main id="content">
        <SortingButtons />
        <FilterCheckbox onClick={handleClick} showStable={showStable} />
        <Algorithms />
      </main>
      <footer className="app-footer">
        Copyright &copy; 2020 NQ
      </footer>
    </div>
  );
}

const FilterCheckbox = (handleClick, showStable) => {
  return (
    <form className="filter-form">
      <label className="filter-label">
        <input 
          type="checkbox" 
          name="filter" 
          className="filter-checkbox"
          onClick={handleClick}
          defaultChecked={showStable}
        />
        Show only stable algorithms
      </label>
    </form>
  )
}


export default App;
