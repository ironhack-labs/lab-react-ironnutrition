import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./FoodBox";
import foods from "./foods.json";
import AddFood from "./AddFood";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: foods
    };
  }

  addFoodHandler = food => {
    const newFoodList = [...this.state.foods];
    newFoodList.unshift(food);
    this.setState({
      foods: newFoodList
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <AddFood addTheFood={this.addFoodHandler} />
        <ul>
          {this.state.foods.map((food, i) => (
            <FoodBox key={i} food={food} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
