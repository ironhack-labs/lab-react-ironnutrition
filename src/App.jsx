import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const[foods, setFoods] = useState(foodsJson)
  return (
  <div className="App">
  <h1>LAB | React IronNutrition</h1>
  <AddFoodForm allFoodsList={foods} setAllFoods={setFoods} />;
  <h2>Food List</h2>
  {foods.map((food) => {
        return <FoodBox food={food} allFoodsList={foods} setAllFoods={setFoods} />;
      })}

  </div>
  );
};

export default App;
