import { useState } from "react";

import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

import foodsJson from "../foods.json";

function FoodList() {
  const [foods, setfoods]=useState(foodsJson)
   
    const handleDeleteFood= foodId => {
      const filteredFoods = foods.filter(food => {
        return food.id !== foodId;
      });
   
      setfoods(filteredFoods);
    };

    const addNewFood= (food) => {
      const updatedFoods = [food, ...foods];
   
      setfoods(updatedFoods);
    };
  return (
    <>
      <h2>Food List</h2>
      
      <AddFoodForm addFood={addNewFood} />
      
      {foods.map(food =>{
        return <FoodBox food={food} handleDelete={handleDeleteFood} key={food.id} />
      })}
    </>
  );
}

export default FoodList;
