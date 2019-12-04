import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import FoodBox from "./FoodBox/FoodBox";

class App extends Component {
  constructor() {
    super();

    this.foodsClone = [...foods];

    this.state = {
      foods: this.foodsClone
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.foods.map((element, idx) => {
          return (
            <FoodBox
              key={idx}
              image={element.image}
              name={element.name}
              calories={element.calories}
            ></FoodBox>
          );
        })}
      </div>
    );
  }
}

export default App;
