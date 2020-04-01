import React, { Component } from "react";
import "bulma/css/bulma.css";
import foods from "./foods.json";

import "./App.css";
import { FoodBox } from "./components/FoodBox";
import AddFood from "./components/AddFood";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstFood: foods
    };
  }

  addFoodHandler = theFood => {
    const foodsCopy = [...this.state.firstFood];
    foodsCopy.push(theFood);
    this.setState({ firstFood: foodsCopy });
  };

  render() {
    const allFoods = this.state.firstFood.map((oneItem, index) => (
      <FoodBox
        key={oneItem.id}
        image={oneItem.image}
        name={oneItem.name}
        calories={oneItem.calories}
      />
    ));

    return (
      <div>
        <AddFood addTheFood={this.addFoodHandler} />
        {allFoods}
      </div>
    );
  }
}

export default App;
