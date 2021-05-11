import React from 'react';
import './App.css';

import foods from './foods.json';
import 'bulma/css/bulma.css';

import FoodBox from './components/FoodBox/Foodbox';

function App() {
  const foodList = foods.map((item) => {
    return <FoodBox food={item} />;
  });

  return (
    <div className="App">
      <div class="container">
        <h1 class="title">IronNutrition</h1>
        <div>
          <input
            type="text"
            class="input search-bar"
            name="search"
            placeholder="Search"
            value=""
          />
        </div>
        <div class="columns">
          <div class="column">{foodList}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
