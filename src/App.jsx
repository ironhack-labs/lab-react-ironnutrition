import React from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = React.useState(foodsJson);

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    // Update the state with filtered foods
    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFood />
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>
  );
}

export default App;
