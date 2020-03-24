import React, { useState, useContext } from "react";
import { FoodContext } from "./context/Context";

export const TodaysFood = () => {
  const { todaysFood } = useContext(FoodContext);

  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {todaysFood.map((food, i) => (
          <li key={i}>
            {food.quantity} {food.name}= {food.calories} cal
          </li>
        ))}
      </ul>
      <strong>
        Total: {todaysFood.reduce((acc, cur) => acc + cur.calories, 0)}
      </strong>
    </div>
  );
};
