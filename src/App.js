import React from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import './App.css';

const addFood = (food) => {

}


function App() {
  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <div>
        <input type="text" className="input search-bar" name="search" placeholder="Search" value=""/>
      </div>
      <div className="columns">
        <div className="column">
          <h1 className="title">IronNutrition</h1>
            {foods.map(food => 
              <FoodBox key={food.name} item={food}/>
            )}
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
