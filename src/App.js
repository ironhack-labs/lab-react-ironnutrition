import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import DisplayFoods from './components/DisplayFoods';
import AddNewFoodButton from './components/AddNewFoodButton';
// import Search from "./components/Search"

function App() {
  return (
    <div class="container">
      <h1 class="title is-1">Iron Nutrition</h1>
      <DisplayFoods />
      <AddNewFoodButton />
    </div>
  );
}

export default App;
