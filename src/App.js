import React from 'react';
import './App.css';
import './components/AlgorithmCard.js';
import AlgorithmCard from './components/AlgorithmCard.js';
import data from './data.json';

function App() {
  const algorithms = data.map( (algorithm, index) => <AlgorithmCard
      key={index}
      name={algorithm.name}
      moreDetailsUrl={algorithm.moreDetailsUrl}
      imageUrl={algorithm.imageUrl}
      description={algorithm.description}
      averagePerformance={algorithm.averagePerformance}
    />
  )
  return (
    <div className="App">
      <header className="app-header">
        <h1>Algorithms</h1>
      </header>
      <main id="content">
        {algorithms}
      </main>
      <footer className="app-footer">
        Copyright 2020
      </footer>
    </div>
  );
}

export default App;
