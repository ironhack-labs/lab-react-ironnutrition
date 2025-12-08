import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import foodsJson from "./foods.json";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodIdToDelete) => {
    const filteredFoods = foods.filter((food) => food.id !== foodIdToDelete);
    setFoods(filteredFoods);
  }

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      
      <AddFoodForm addFood={addFood} />

      {foods.map((foodItem, index) => (
        <FoodBox key={index} food={foodItem} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;
