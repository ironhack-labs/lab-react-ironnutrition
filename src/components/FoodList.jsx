// FoodList.js
import React, { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import foodData from "../../src/foods.json";

function FoodList() {
  const [foods, setFoods] = useState(foodData);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const deleteFood = (foodId) => {
    const filteredFoods = foods.filter((food) => {
      return food.id !== foodId;
    });

    setFoods(filteredFoods);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      <h3>Add Food Entry</h3>
      <AddFoodForm onAddFood={addFood} />
      {foods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onDelete={() => deleteFood(food.id)}
        />
      ))}
    </div>
  );
}

export default FoodList;
