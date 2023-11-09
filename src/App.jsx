import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const[foods, setFood] =useState(foodsJson);
  
  const deleteFood = (foodId) =>{
      const updateFood = foods.filter((food) =>  food.id !== foodId);
    setFood(updateFood);
  }
  
  
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm/>
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={deleteFood} />
      ))}


    </div>
  );
}

export default App;
