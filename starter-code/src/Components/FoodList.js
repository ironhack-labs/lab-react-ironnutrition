import React, { useState, useEffect } from "react";

import FoodsData from "../foods.json";
import { FoodBox } from "./Foodbox";
import { AddFood } from "./AddFood";

export const FoodList = () => {
  const [foods, setFood] = useState(FoodsData);

  function addNewFood(food) {
    console.log(food);
    const copyFoodsData = [...foods];
    copyFoodsData.push(food);
    console.log(copyFoodsData);
    setFood(copyFoodsData);
  }

  //   console.log(FoodsData);

  return (
    <div>
      {foods.map((food, idx) => (
        <FoodBox key={idx} {...food}></FoodBox>
      ))}
      <AddFood includeFood={addNewFood}></AddFood>;
    </div>
  );
};
