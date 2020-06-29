import React from 'react';
import './App.css';
import './components/Algorithms.js';
import Algorithms from './components/Algorithms.js';
import SortingButtons from './components/SortingButtons';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Algorithms</h1>
      </header>
      <main id="content">
        <SortingButtons />
        <Algorithms />
      </main>
      <footer className="app-footer">
        Copyright &copy; 2020 NQ
      </footer>
    </div>
  );
}
export default App;
