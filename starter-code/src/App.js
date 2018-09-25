import React, { Component } from "react";

import "./App.css";

import FoodList from "./Foodlist";
import "bulma/css/bulma.css";

import foods from "./foods.json";

class App extends Component {
  state = {
    foodList: foods.slice(),
    showForm: false
  };
  render() {
    return <FoodList foods={this.state.foodList.slice()} />;
  }
}

export default App;
