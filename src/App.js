import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/food-box/Food-box';

function App() {
  return (
    <div className="App">
      <div className="container">
        <FoodBox />
      </div>
    </div>
  );
}

export default App;
