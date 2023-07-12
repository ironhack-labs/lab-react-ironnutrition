import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import foodsJson from "./foods.json";
import "./App.css";
import "./Index.css";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (newRecipe) => {
    setFoods([...foods, newRecipe]);
  };

  const handleDeleteFood = (id) => {
    const newFoodList = foods.filter((food) => food.id !== id);

    setFoods(newFoodList);
  };

  return (
    <div className="App">

      <h1>LAB | IronNutrition</h1>

      <AddFoodForm addFood={addFood}/>

      {foods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onClick={() => handleDeleteFood(food.id)}
        />
      ))}
    </div>
  );
}
export default App;
