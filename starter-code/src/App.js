import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Foodbox from "./components/Foodbox.js";

import "bulma/css/bulma.css";
import foods from "./foods.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        {foods.map((foodItem, index) => {
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
