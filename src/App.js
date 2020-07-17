import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <FoodBox food={foods} />
    </div>
  );
}

export default App;
