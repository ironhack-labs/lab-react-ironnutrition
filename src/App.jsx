import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";


import React from "react";
import FoodList from "./components/FoodList";

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foodsJson);


  function handleAddFood(newFood) {
    setFoodsToDisplay([...foodsToDisplay, newFood]);
  }

  const deleteFood = (foodId) => {
    const newList = foodsToDisplay.filter((foodObj) => {
      return foodObj.id !== foodId;
    })
    setFoodsToDisplay(newList);
  }

  return (
   <FoodList food={foodsToDisplay} 
   callbackToDelete={deleteFood}
   handleAddFood={handleAddFood} />
  );
}

export default App;
