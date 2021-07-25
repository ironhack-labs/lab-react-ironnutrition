import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodList from './components/food/food-list/FoodList';

function App() {
  return (
    <div className="App container">
      <h1 className="my-5">IronNutrition</h1>  
      <FoodList />
    </div>
  );
}

export default App;