import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FoodBox from "./Foodbox.js";
import AddNewFood from "./AddNewFood.js";
import foods from "./foods.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { foodArray: foods };
  }
  addNewFood(foodObject) {
    const foods = this.state.foodArray;
    foods.unshift(foodObject);
    this.setState({ foodArray: foods });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AddNewFood foodSubmit={foodObject => this.addNewFood(foodObject)} />
        <FoodBox foodArray={this.state.foodArray} />
      </div>
    );
  }
}

export default App;
