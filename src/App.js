import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/food-box/FoodBox';
import AddFood from './components/add-fox/AddFood';

function App() {

  return (
    <div id="root">
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <div>
        <input type="text" className="input search-bar" name="search" placeholder="Search" value="" />
      </div>
      <AddFood></AddFood>      
      <div className="columns">
        <div className="column">
          { foods.map((food) => <FoodBox food={food} />) }
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
