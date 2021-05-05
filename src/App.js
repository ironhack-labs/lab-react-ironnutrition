import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodList from './foodlist/FoodList';

function App() {
  return (
    <div>
      <h1 className="title is-1 ml-2">IronNutrition</h1>
      <FoodList foods={foods} />
    </div>
  );
}

export default App;
