import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFood";

class App extends Component {
  state = {
    foods: foods
  };
  render() {
    return (
      <div className="App">
        <button>add food</button>
        {this.state.foods.map((oneFood, idx) => {
          return (
            <div>
              <FoodBox key={idx} {...oneFood}></FoodBox>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
