import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>IronNutrition</h2>
        <FoodBox />
      </div>
    );
  }
}

export default App;
