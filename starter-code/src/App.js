import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Foodbox from "./Foodbox.js";
import foodsList from "./foods.json";
import FoodsDisplay from "./FoodsDisplay.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FoodsDisplay />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
