import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import foodsJson from "./foods.json";
import "./App.css";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    setFoods((prevFoods) => [...prevFoods, newFood]);
  };

  const deleteFood = (id) => {
    const updatedFoodList = foods.filter((food) => food.id !== id);
    setFoods(updatedFoodList);
  };

  return (
    <div className="App">
      <h1>Add Food Entry</h1>
      <AddFoodForm addFood={addFood} />
      <h1>Food List</h1>
      {foods.map((food, index) => (
        <FoodBox
          key={index}
          food={{
            id: food.id,
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings,
          }}
          deleteFood={deleteFood}
        />
      ))}
    </div>
  );
}

export default App;
