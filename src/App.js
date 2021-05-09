import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.jsx'

import './App.css';

function App() {
  return (
    <div className="App">
    <h1>IronNutrition</h1>


    {foods.map((foodItem, index) => {
      return <FoodBox key={index} {...foodItem}/>;




    })}
    </div>
  );
}

export default App;
