import React, { useContext } from "react";
import { FoodContext } from "./context/FoodContext";

export const TodayFood = () => {
  const { todayFood } = useContext(FoodContext);

  return (
    <div>
      {todayFood.map((food, i) => {
        return (
          <div>
            <li key={i}>
              {" "}
              {food.quantity} &nbsp;
              {food.name} {"="} &nbsp;
              {food.calories} cal
            </li>
          </div>
        );
      })}
    </div>
  );
};
