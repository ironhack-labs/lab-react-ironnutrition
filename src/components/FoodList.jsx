import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";

function FoodList() {

    const [foods, setFoods] = useState(foodsJson);

  return (
    <>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <FoodBox foods={foods} setFoods={setFoods} />
    </>
  );
}

export default FoodList;
