import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { FoodsContext } from "../context/Context";
import { FoodItem } from "./FoodItem";

export const FoodBox = food => {
  const { foods } = useContext(FoodsContext);
  console.log("foods data --- >>>", foods);
  return (
    <>
      {foods.map((food, i) => (
        <FoodItem key={i} className="box" data={food} />
      ))}
    </>
  );
};
