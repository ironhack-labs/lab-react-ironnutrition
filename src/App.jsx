/* eslint-disable no-unused-vars */
import "./App.css";
import foodsJson from "/src/foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
function App() {
  const [foodArr, setFoodArr] = useState(foodsJson) ;
  const foodMap = foodArr.map((food, index)=><FoodBox key={index} food={food} remove={removeFood} />)
  
  function removeFood(foodId){
    setFoodArr(prevArr =>prevArr.filter(entry=>entry.id !== foodId))
  }
  function addMeal(foodObj){
    setFoodArr(prevArr =>[foodObj, ...prevArr])
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addMeal={addMeal}/>
      {foodMap}
    </div>
  );
}

export default App;
