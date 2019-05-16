import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";

class App extends Component {
  state= {
    calories: 0
  }
  render() {
    const {calories} = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1 className="title has-text-left marginBottom">IronNutrition</h1>
          <div>
            <input className="input search-bar marginBottom" type="text" />
          </div>
          <div className="columns">
          <div className="column">
          <FoodBox {...foods[0]} />
          </div>
          <div className="column content">
            <h2 className="title has-text-left has-">Today's foods</h2>
            <div className="has-text-left">
              <strong>Total:{calories} calories</strong>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


