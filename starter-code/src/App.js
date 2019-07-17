import React, { Component } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox />
      </div>
    );
  }
}

export default App;
