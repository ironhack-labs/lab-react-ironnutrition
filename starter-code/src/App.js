import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Get started</p>

        {foods.map((oneFood, index) => {
          return <FoodBox food={oneFood} key={index} />;
        })}
      </div>
    );
  }
}

export default App;
