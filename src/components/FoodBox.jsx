// Your code here
import { useState } from "react";

import './FoodBox.css'
import foodsJson from "../foods.json";
import Food from "./Food";

export default function FoodBox() {

  const [foods, setFoods] = useState(foodsJson);

  const onDeleteFood = (id) => {
    const newFoods = foods.filter((food) => food.id !== id);
    setFoods(newFoods);
  }
  

 return (

    <div className="food-box">
      {
        foods.map((food) => {
          return (
            <Food {...food} key={food.id} deleteFood={() => onDeleteFood(food.id)} />
          )
        })
      }
    </div>
  );
}
