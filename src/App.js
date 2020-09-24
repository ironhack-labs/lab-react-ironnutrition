import React from 'react';
import logo from './logo.svg';
import './App.css';
import Foods from './components/Food/index';

//json
import foods from './components/Food/foods.json';

function App() {
  return (
    <div className="App">
      <Foods />
    </div>
  );
}

export default App;
