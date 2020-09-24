import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBox from './Component/Foodbox/FoodBox';

function App() {
  return (
    <div className="App">
      <h1>
        <b>IronNutrition</b>
      </h1>
      {foods.map((food, index) => {
        return (
          <FoodBox
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quanity}
          />
        );
      })}
    </div>
  );
}

export default App;
