import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        {foods.map((food, idx) => (
          <FoodBox key={idx} food={food} />
        ))}
      </div>
    );
  }
}

export default App;
