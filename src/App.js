import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodList from './components/FoodList';


function App() {
  return (
    <div className="App">
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
