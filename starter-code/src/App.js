import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";

import FoodBox from "./components/FoodBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodArr: foods
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.foodArr.map(food => (
          <FoodBox key={food.name} food={food} />
        ))}
      </div>
    );
  }
}

export default App;
