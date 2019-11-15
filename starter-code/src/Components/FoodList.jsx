import React from "react";
import { FoodBox } from ".";
import TodayMenu from "./TodayMenu";

const FoodList = ({
  foods,
  selectedFoods,
  handleQuantityChange,
  addTodayFood,
  removeTodayFood
}) => (
  <div className="food-list-container">
    <div className="food-list">
      {foods.map(food => (
        <FoodBox
          addTodayFood={addTodayFood}
          handleQuantityChange={handleQuantityChange}
          key={`${food.name}-${food.calories}-${food.image}`}
          {...food}
        />
      ))}
    </div>
    <div className="today-food">
      <h1>Today's Food</h1>
      <TodayMenu
        selectedFoods={selectedFoods}
        removeTodayFood={removeTodayFood}
      />
    </div>
  </div>
);

export default FoodList;
