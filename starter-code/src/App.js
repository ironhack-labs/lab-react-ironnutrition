import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import FoodBox from "./Components/FoodBox/FoodBox";

class App extends Component {
  render() {
    return (
      <div className="columns">
          <FoodBox />
        </div>
    );
  }
}

export default App;
