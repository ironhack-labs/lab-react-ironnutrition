import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";

class App extends Component {
  state = {
    FoodMeal: foods,
    food: {
      name: "",
      calories: "",
      image: "",
      quantity: 0
    }
  };

  render() {
    const { FoodMeal } = this.state;

    return (
      <div className="App">
        <div className="column is-half">
          {FoodMeal.map((e, i) => {
            return <FoodBox food={e} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
