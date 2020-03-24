import React from "react";
import "./App.css";
import { FoodBox } from "./components/FoodBox";
import { FoodContextProvider } from "./components/context/FoodContext";
import { NewFood } from "./components/NewFood";
import { SearchFood } from "./components/SearchFood";

export const App = () => (
  <FoodContextProvider>
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <div>
        {/* <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          value=""
        /> */}
        <SearchFood />
      </div>
      <div className="columns">
        <div className="column">
          <FoodBox />
          <NewFood />
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
