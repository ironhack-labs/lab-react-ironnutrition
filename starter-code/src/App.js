import React, { Component } from "react";
import logo from "./logo.svg";
import "bulma/css/bulma.css";
import FoodBox from "./components/foodbox";
import foods from "./foods.json";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          {foods.map(item => (
            <FoodBox name={item.name} calories={item.calories} image={item.image} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
