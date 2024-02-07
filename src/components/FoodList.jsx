import React, { useState } from "react";
import foodsJSON from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {
    const [foods, setFoods] = useState(foodsJSON);

    const handleDelete = (foodId) => {
      const updateFoods = foods.filter((food) => food.id !== foodId);
      setFoods(updateFoods);
    };
  
    const handleAddFood = (newFood) => {
      setFoods([...foods, { ...newFood, id: foods.length +1 }]);
    }
  
    return (
      <div className="app-container">
        <h1>Food List</h1>
        <AddFoodForm onAddFood={handleAddFood} />
        <div className="food-list-container">
          {foods.map((food, index) => (
            <FoodBox key={index} food={food} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    );
}

export default FoodList;
