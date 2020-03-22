import React, { useState } from "react";

import FoodsData from "../foods.json";
import { FoodBox } from "./Foodbox";
import { AddFood } from "./AddFood";

export const FoodList = () => {
  const [foods, setFood] = useState(FoodsData);
  const [addFood, setAddFood] = useState(false);
  const [filterStart, setFilterStart] = useState("");

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

  //busqueda de comidas
  const filtered_food = foods.filter(food => {
    const re = new RegExp(filterStart);
    return re.test(food.name);
  });

  return (
    <div>
      <div>
        <label></label>
        <input
          value={filterStart}
          onChange={e => setFilterStart(e.target.value)}
          placeholder="Search"
          className="form-control"
        />
      </div>
      <button className="button is-info" onClick={showForm}>
        Add Food
      </button>
      {addFood && (
        <AddFood closeForm={closeForm} includeFood={addNewFood}></AddFood>
      )}
      {filtered_food.map((food, idx) => (
        <FoodBox key={idx} {...food}></FoodBox>
      ))}
    </div>
  );
};
