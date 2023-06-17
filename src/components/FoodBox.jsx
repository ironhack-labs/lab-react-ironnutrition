import { useState } from "react";
import foodsJson from "../foods.json";

function FoodBox() {
  const [FoodBox] = useState(foodsJson);
  let total = FoodBox.servings * FoodBox.calories;
  return (
    <div>
      <h1>Nutrition</h1>

      {FoodBox.map(function (food) {
        console.log("fooooood", food);
        return (
          <div key={food.id}>
            <p>{food.name}</p>

            <img src={food.image} />

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
              <b>Total Calories: {total}</b>
              kcal
            </p>

            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default FoodBox;
