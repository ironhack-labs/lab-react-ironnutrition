import React from "react";

import { FoodItem } from "./FoodItem";

export const FoodBox = ({ foodList }) => {
  console.log("foods list --- >>>", foodList);

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
