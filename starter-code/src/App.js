import React from "react";
import ReactDOM from "react-dom";
import "../public/styles/App.css";
import { FoodBox } from "../src/components/FoodBox";
import { FoodsContextProvider } from "../src/context/Context";

export const App = () => {
  return (
    <>
      <FoodsContextProvider>
        <FoodBox />
      </FoodsContextProvider>
    </>
  );
};
