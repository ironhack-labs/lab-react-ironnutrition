import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";

class App extends Component {
  state = {};

  displayFoods = () => {};
  render() {
    return (
      <div className="App">
        <FoodBox />
      </div>
    );
  }
}

export default App;
