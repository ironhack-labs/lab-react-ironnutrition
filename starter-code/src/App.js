import React from "react";
import "./App.css";
import { FoodContextProvider } from "./components/context/Context";
import { FoodBox } from "./components/FoodBox";
import { AddFood } from "./components/AddFood";
import { SearchInput } from "./components/SearchFood";
import { TodaysFood } from "./components/TodaysFood";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => (
  <FoodContextProvider>
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <SearchInput />
      <div className="columns">
        <div className="column">
          <FoodBox />
          <AddFood />
        </div>
        <TodaysFood />
      </div>
    </div>
  </FoodContextProvider>
);
