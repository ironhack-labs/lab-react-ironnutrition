import React from "react";
import "./App.css";
import { FoodContextProvider } from "./components/context/Context";
import { FoodBox } from "./components/FoodBox";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => (
  <FoodContextProvider>
    <div class="container">
      <h1 class="title">IronNutrition</h1>
      <div>
        <input
          type="text"
          class="input search-bar"
          name="search"
          placeholder="Search"
          value=""
        />
      </div>
      <div class="columns">
        <div class="column">
          <FoodBox />
        </div>
        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
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
