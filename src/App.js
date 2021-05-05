import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "../src/Components/FoodBox/FoodBox";

function App() {
  return (
    <div className="App">
    <h1>IronNutrition</h1>
    <FoodBox />
    </div>
  );
}

export default App;
