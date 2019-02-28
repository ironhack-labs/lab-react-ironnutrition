import React, { Component } from "react";
import FoodBox from "./components/FoodBox";

import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">IRON NUTRITION</h1>
        {/* <div>
          <input
            type="text"
            class="input search-bar"
            name="search"
            placeholder="Search"
            value=""
          />
        </div> */}
        <div className="columns">
          <div className="column">
            <FoodBox />
          </div>

          {/* <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
              <li>1 Pizza = 400 cal</li>
              <li>2 Salad = 300 cal</li>
            </ul>
            <strong>Total: 700 cal</strong>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
