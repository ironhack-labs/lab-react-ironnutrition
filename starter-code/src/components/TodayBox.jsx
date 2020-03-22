import React from "react";

const TodayBox = ({ food }) => {
  console.log("TODAY BOX", food);
  return (
    <li>
      {food.amount} {food.name} = {food.calories * food.amount}
    </li>
  );
};

export default TodayBox;
