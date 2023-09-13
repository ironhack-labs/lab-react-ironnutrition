import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFoodForm";
import "./App.css";

function App() {
  const [foodToDisplay, setFoodToDisplay] = useState(foodsJson);
  const deleteFood = (foodName) => {
    const newFoodList = foodToDisplay.filter((element) => {
      console.log(foodName)
      return element.name !== foodName;
    });
    setFoodToDisplay(newFoodList);
  };
  const addNewFood = (newFood) => {
    const newList = [newFood, ...foodToDisplay];
    setFoodToDisplay(newList);
    };
  return (
    <>
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
      </div>
      <AddFood callbackToAddFood={addNewFood} />
      <FoodBox food={foodToDisplay} callbackToDelete={deleteFood}/>
    </>
  );
}

export default App;
