import React from 'react';
import './App.css';
import './components/Algorithms.js';
import Algorithms from './components/Algorithms.js';
// import data from './data.json';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Algorithms</h1>
      </header>
      <main id="content">
        <Algorithms />
      </main>
      <footer className="app-footer">
        Copyright 2020
      </footer>
    </div>
  );
}

export default App;
