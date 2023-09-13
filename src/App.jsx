import { useState } from "react"

import foodsJson from "./foods.json";

import FoodBox from "./components/FoodBox"

import AddFoodForm from "./components/AddFoodForm"

import "./App.css";

function App() {

  const [foodsToDisplay, setFoodsToDisplay] = useState(foodsJson)


  const deleteFood = (id) => {
    const newList = foodsToDisplay.filter((element) => {
      return element.id !== id
    })
    setFoodsToDisplay(newList)
  }

  const addNewFood = (newFood) => {
    const newList = [newFood, ...foodsToDisplay]
    setFoodsToDisplay(newList)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm callbackToAddFood={addNewFood}/>
      {foodsToDisplay.map( (food) =>
      <FoodBox key={food.id} food={food} callbackToDelete={deleteFood}/>
      )}
    </div>
  );
}

export default App;
