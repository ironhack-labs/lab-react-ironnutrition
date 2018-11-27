import React from "react";

const Food = ({ food }) => (
  <li>
    {food.quantity} {food.name} = {food.calories * food.quantity} cal
  </li>
);

export default Food;
