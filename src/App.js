import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodList from './components/foodlist/FoodList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title m-5">IronNutrition</h1>
        <FoodList foods={foods} />
      </div>
    </div>
  );
}

export default App;
