import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./Components/Foodbox.jsx";
import foods from "./foods.json";

class App extends Component {
  render() {
    return (
      <div>
        <FoodBox />
      </div>
    );
  }
}

export default App;
