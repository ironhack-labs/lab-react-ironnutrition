import React, { useState, useContext } from "react";
import { FoodContext } from "./context/Context";

export const TodaysFood = () => {
  const { todaysFood, deleteFood } = useContext(FoodContext);

  const handleDelete = e => {
    deleteFood(e.currentTarget.getAttribute("food"));
  };

  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {todaysFood.map((food, i) => (
          <div key={i}>
            <li>
              {food.quantity} x {food.name}= {food.calories * food.quantity}
              <a onClick={handleDelete} food={food.name} className="delete"></a>
            </li>
          </div>
        ))}
      </ul>
      <strong>
        Total: {todaysFood.reduce((acc, cur) => acc + cur.calories, 0)}
      </strong>
    </div>
  );
};
