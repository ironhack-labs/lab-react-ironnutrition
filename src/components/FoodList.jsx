import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFoodForm";

function FoodList() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foodsJson);

  const addNewFood = (newFood) => {
    const newList = [newFood, ...foodsToDisplay];
    setFoodsToDisplay(newList);
  };

  const deleteFood = (foodId) => {
    const newList = foodsToDisplay.filter((elm) => {
      return elm.id !== foodId;
    });
    setFoodsToDisplay(newList);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFood callbackToAddFood={addNewFood} />
      <FoodBox foodsToDisplay={foodsToDisplay} callbackToDelete={deleteFood} />
    </div>
  );
}

export default FoodList;
