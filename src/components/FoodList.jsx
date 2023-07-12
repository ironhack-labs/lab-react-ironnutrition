import React from "react";
import { useState } from "react";
import FoodBox from "./FoodBox";

function FoodList(props) {
  const { food } = props;
  return (
    <div>
      {food.map((food) => {
        return <FoodBox />;
      })}
    </div>
  );
}

export default FoodList;
