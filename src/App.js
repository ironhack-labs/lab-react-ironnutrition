import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import AddFoodForm from './AddFoodForm/AddFoodForm';
import Search from './Search/Search';

function App() {
const[foodState, setFoods] = useState([...foods]);

  return (
    <div className="App">
     <AddFoodForm addFood={foodState} attFood={setFoods} />
      <Search appState = {foodState} setApp={setFoods}
      />
      <h1>IronNutrition</h1>
      {foodState.map((foodItem, idx) => (
        <FoodBox
        index = {idx}
        name = {foodItem.name}
        image = {foodItem.image}
        calories = {foodItem.calories}
        quantity = {foodItem.quantity}
        /> ))}
       
  </div>
  );
}

export default App;
