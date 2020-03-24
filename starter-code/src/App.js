import React from "react";
import "./App.css";
import { FoodContextProvider } from "./components/context/Context";
import { FoodBox } from "./components/FoodBox";
import { AddFood } from "./components/AddFood";
import { SearchInput } from "./components/SearchFood";

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
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
      </div>
    </div>
  </FoodContextProvider>
);
