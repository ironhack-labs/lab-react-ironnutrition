import React, { useContext } from "react";
import { FoodContext } from "./FoodContext";

const TodaysFoods = () => {
  const { todaysFoods, deleteFood } = useContext(FoodContext);

  const handleDeleteFood = event => {
    deleteFood(event.currentTarget.getAttribute("food"));
  };

  return (
    <div>
      <h2 className="title is-2">Today's foods</h2>
      <ul>
        {todaysFoods.map(food => (
          <li key={food.name}>
            {food.quantity} x {food.name} = {food.calories}{" "}
            <a
              className="delete"
              onClick={handleDeleteFood}
              food={food.name}
            ></a>
          </li>
        ))}
      </ul>
      <p>
        Total: {todaysFoods.reduce((acc, cur) => acc + cur.calories, 0)}{" "}
        calories
      </p>
    </div>
  );
};

export default TodaysFoods;
