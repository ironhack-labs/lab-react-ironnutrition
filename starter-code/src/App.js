import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";

class App extends Component {
  state = {
    foodsMain: foods
  };

  displayFoods = () => {
    let foodsCopy = [...this.state.foodsMain];
    return foodsCopy.map((item, i) => {
      console.log(item);
      return <FoodBox foods={item} />;
    });
  };

  render() {
    return <div className="App">{this.displayFoods()}</div>;
  }
}

export default App;
