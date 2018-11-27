import React from "react";
import Food from "./Food";

const List = ({ todayFoods, totalCalories }) => (
  <div>
    <h1>Today's foods</h1>
    <ul>
      {todayFoods.map((food, i) => (
        <Food key={i} food={food} />
      ))}
    </ul>
    <h3>Total: {totalCalories} cal</h3>
  </div>
);

export default List;
