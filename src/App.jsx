import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodArr, setFoodArr] = useState(foodsJson);

  const deleteFood = (foodId) => {
    const newFoods = foodArr.filter((elm) => {
      return elm.id !== foodId;
    });
    setFoodArr(newFoods);
  };

  const addFood = (e, foodData) => {
    e.preventDefault();

    const newFood = {
      name: foodData.foodName,
      image: foodData.image,
      calories: foodData.calories,
      servings: foodData.servings,
    };

    const newList = [newFood, ...foodArr];
    setFoodArr(newList);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm callbackToAdd={addFood} />
      <FoodBox foodDetails={foodArr} callbackToDelete={deleteFood} />
    </div>
  );
}

export default App;
