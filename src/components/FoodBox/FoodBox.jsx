import React from "react";
import Item from "./item"

const FoodBox = ({ foods }) => {
  return (
    <div className="FoodsList list-group">
      {foods.map((food) => {
        return <Item key={food.id} {...food} />;
      })}
    </div>
  );
};

export default FoodBox;
