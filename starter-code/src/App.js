import React, { useContext } from "react";
import { FoodsContext } from "./context/Context";

import "../public/styles/App.css";

import { FoodBox } from "../src/components/FoodBox";
import { AddFood } from "../src/components/AddFood";

export const App = () => {
  const { foods } = useContext(FoodsContext);
  return (
    <>
      <div className="container">
        <h1 className="App-title">Iron Nutrition</h1>
        <div className="columns ">
          <div className="column is-half">
            <FoodBox foodList={foods} />
          </div>
          <div className="column is-half">
            <AddFood />
          </div>
        </div>
      </div>
    </>
  );
};
