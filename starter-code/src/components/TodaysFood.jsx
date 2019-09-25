import React from "react";

export default props => (
  <ul>
    {props.todayFoodList.map(food => (
      <li key={food.name}>
        {food.quantity} {food.name} - {food.quantity * food.calories}cal
      </li>
    ))}
  </ul>
);
