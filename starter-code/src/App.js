import React from "react";
import ReactDOM from "react-dom";
import "../public/styles/App.css";
import { FoodBox } from "../src/components/FoodBox";
import { FoodsContextProvider } from "../src/context/Context";

export const App = () => {
  return (
    <>
      <FoodsContextProvider>
        <div className="container">
          <h1 className="App-title">Iron Nutrition</h1>
          <div class="columns ">
            <div class="column is-half">
              <FoodBox />
            </div>
            <div class="column is-half">Second column</div>
          </div>
        </div>
      </FoodsContextProvider>
    </>
  );
};
