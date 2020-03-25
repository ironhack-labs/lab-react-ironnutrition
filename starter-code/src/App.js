import React, { useState, useContext } from "react";

import foodsArray from "../src/context/foods.json";

import "../public/styles/App.css";
import { FoodsContext } from "../src/context/Context";

import { FoodBox } from "../src/components/FoodBox";
import { AddFood } from "../src/components/AddFood";

export const App = () => {
  //   const { foods } = useContext(FoodsContext);
  const [foods, setFoods] = useState(foodsArray);
  //   const [foodsList, setFoodsList] = useState(foods);

  const createNewFood = newFood => {
    setFoods([newFood, ...foods]);
    console.log("HEY newFood!", newFood);
  };

  return (
    <>
      <div className="container">
        <h1 className="App-title">Iron Nutrition</h1>
        <div className="columns ">
          <div className="column is-half">
            <FoodBox foodList={foods} />
          </div>
          <div className="column is-half">
            <AddFood otraCosa={"otra cosa"} addFood={createNewFood} />
          </div>
        </div>
      </div>
    </>
  );
};
