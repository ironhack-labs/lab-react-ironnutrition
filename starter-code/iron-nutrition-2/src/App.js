import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FoodList></FoodList>
      </header>
    </div>
  );
}

export default App;
