import React from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

import foodsJson from "../foods.json";
import { useState } from "react";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foods={foods} setFoods={setFoods}></AddFoodForm>
      <FoodBox foods={foods} setFoods={setFoods} />
    </div>
  );
}

export default FoodList;
