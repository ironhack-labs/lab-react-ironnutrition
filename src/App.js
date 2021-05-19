import React from 'react';

import foods from './foods.json';

import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox';

// console.log(foods)

function App() {
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      {
        foods.map(food => <FoodBox {...food} key={food.name}/>)
      }
      
    </div>
  );
}

export default App;
