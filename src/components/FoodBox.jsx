import { useState } from "react";
import foodsJson from "../foods.json";

function FoodBox(props) {
  const [FoodBox, setFoodBox] = useState(foodsJson);
  //let total = food.servings * food.calories;
  return (
    <div>
      {FoodBox.map(function (food) {
        console.log("fooooood", food);
        return (
          <div>
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
