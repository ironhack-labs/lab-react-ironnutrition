import React, { useState, useEffect } from "react";

import FoodsData from "../foods.json";
import { FoodBox } from "./Foodbox";
import { AddFood } from "./AddFood";

export const FoodList = () => {
  const [foods, setFood] = useState(FoodsData);
  const [addFood, setAddFood] = useState(false);

  function addNewFood(food) {
    console.log(food);
    const copyFoodsData = [...foods];
    copyFoodsData.push(food);
    console.log(copyFoodsData);
    setFood(copyFoodsData);
  }

  const showForm = () => {
    const { show } = addFood;
    setAddFood(!show);
  };

  const closeForm = () => {
    setAddFood(false);
  };

  //   console.log(FoodsData);

  return (
    <div>
      <button className="button is-info" onClick={showForm}>
        Add Food
      </button>
      {addFood && (
        <AddFood closeForm={closeForm} includeFood={addNewFood}></AddFood>
      )}
      {foods.map((food, idx) => (
        <FoodBox key={idx} {...food}></FoodBox>
      ))}
    </div>
  );
};
