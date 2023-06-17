import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  function deleteFood(foodId) {
    const foodscopy = foods.slice();

    const foodIndex = foods.findIndex(function (el) {
      return el.id === foodId;
    });

    console.log("foodIndex", foodIndex);

    foodscopy.splice(foodIndex, 1);

    setFoods(foodscopy);
  }

  return (
    <div>
      <h2>Nutrition</h2>

      {foods.map(function (food) {
        return <FoodBox food={food} key={food.id} delete={deleteFood} />;
      })}
    </div>
  );
}

export default FoodList;
