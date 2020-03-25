import React, { useContext } from "react";
import { FoodContext } from "./context/FoodContext";

export const TodayFood = () => {
  const { todayFood, deleteFood, setAllTodayFood } = useContext(FoodContext);

  const handleDeleteFood = event => {
    deleteFood(event.currentTarget.getAttribute("food"));
  };

  return (
    <div>
      <ul>
        {todayFood.map((food, i) => (
          <li key={i}>
            {/* {food.quantity} &nbsp;
              {food.name} {"="} &nbsp;
              {food.calories} cal */}
            {food.quantity} x {food.name} = {food.calories * food.quantity}
            <a
              className="delete"
              onClick={handleDeleteFood}
              food={food.name}
            ></a>
          </li>
        ))}
      </ul>
      <strong>
        Total:
        {todayFood.reduce((acc, current) => acc + current.calories, 0)}
      </strong>
    </div>
  );
};
