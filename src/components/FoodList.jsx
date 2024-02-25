import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";

function FoodList() {
    const [foods, setFoods] = useState(foodsJson);
  return (
    <div>
        <h1>LAB | React IronNutrition</h1>
      <div>
        <AddFoodForm foods={foods} setFoods={setFoods}/>
      </div>
      <div>
        <FoodBox foods={foods} setFoods={setFoods}/>
      </div>
    </div>
  )
}

export default FoodList