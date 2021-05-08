import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodBox/FoodBox.js';

function App() {
  return (
    <div className="App container">
      <div class="columns">
        <div class="column"></div>
        <div class="column is-half">
          <ul>
            {foods.map(food => (
              <li className="food-item" key={food.name}>
                <FoodBox food={food} />
              </li>
            ))}
          </ul>
        </div>
        <div class="column"></div>
      </div>
    </div>
  );
}

export default App;
