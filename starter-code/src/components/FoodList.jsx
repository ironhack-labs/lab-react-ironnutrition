import React from "react";
import FoodBox from "./FoodBox";

export default function FoodList({ foods, addToTodaysHandler }) {
  return (
    <div>
      {foods.map((food, index) => (
        <FoodBox food={food} key={index} addToTodaysHandler={addToTodaysHandler} />
      ))}
    </div>
  );
}
