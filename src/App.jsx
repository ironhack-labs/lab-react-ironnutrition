import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";

import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (foodId) => {
    console.log(foodId);
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });
    setFoods(filteredFoods);
  };
  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];

    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood} />
      {foods.map((food) => {
        return <FoodBox key={food.id} food={food} clickToDelete={deleteFood} />;
      })}
    </div>
  );
}

export default App;
