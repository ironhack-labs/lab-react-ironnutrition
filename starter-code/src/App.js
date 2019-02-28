import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Foodbox from "./components/Foodbox.js";
import AddFood from "./components/AddFood.js";

import "bulma/css/bulma.css";
import foods from "./foods.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      foods: foods
    };
  }

  buttonClick() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  addFoodHandler = myFood => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(myFood);
    this.setState({
      foods: foodsCopy
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.buttonClick.bind(this)}>Add Food</button>
        {this.state.showForm ? (
          <AddFood addMyFood={this.addFoodHandler.bind(this)} />
        ) : null}
        {this.state.foods.map((foodItem, index) => {
          return (
            <Foodbox
              name={foodItem.name}
              calories={foodItem.calories}
              image={foodItem.image}
              quantity={foodItem.quantity}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
