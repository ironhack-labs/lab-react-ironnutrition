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
    <div className="container">
      <h1 className="title is-1 mt-4">Iron Nutrition</h1>
      <DisplayFoods />
    </div>
  );
}

export default App;
