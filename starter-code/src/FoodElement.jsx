import React from "react";

export default function FoodElements({ food }) {
  console.log(food);
  return food.map((v, i) => (
    <li key={i}>
      <b>{v.name}</b>: {v.quantity} * {v.calories} = {v.quantity * v.calories}
      calories
    </li>
  ));
}
