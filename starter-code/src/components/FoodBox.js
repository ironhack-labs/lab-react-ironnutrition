import React, { useState, useContext } from "react";

import { FoodsContext } from "../context/Context";

import { FoodItem } from "./FoodItem";

export const FoodBox = ({ foodList }) => {
  console.log("foods list --- >>>", foodList);
  //   const { foods } = useContext(FoodsContext);
  return (
    <>
      {foodList.map((food, i) => (
        <FoodItem
          key={i}
          className="box"
          data={food}
          //   addNewFood={createNewFood} AÑADIR CANTIDAD
        />
      ))}
    </>
  );
};
