import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import AddFood from './Component/AddFood/AddFood';
import FoodBox from './Component/Foodbox/FoodBox';

function App() {
  return (
    <div className="App">
      <h1>
        <b>IronNutrition</b>
      </h1>
      <AddFood />
      {/* <FoodBox /> */}
    </div>
  );
}

export default App;
