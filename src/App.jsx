import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [foodsDeleted, setDeletedFoods] = useState(0);

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    setFoods(filteredFoods);
    setDeletedFoods(foodsDeleted + 1);
  };

  const addNewFood = (newFood) => {
    const updateFoods = [...foods, newFood];

    setFoods(updateFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food) => {
        return (
          <FoodBox key={food._id} food={food} clickToDelete={deleteFood} />
        );
      })}
      <AddFood addNewFood={addNewFood} />
    </div>
  );
}

export default App;
