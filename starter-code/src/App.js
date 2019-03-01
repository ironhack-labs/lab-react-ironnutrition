import React, { Component } from "react";

import "./App.css";
import "bulma/css/bulma.css";
import food from "./foods.json";
import FoodBox from "./components/FoodBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox food={food} />
      </div>
    );
  }
}

export default App;
