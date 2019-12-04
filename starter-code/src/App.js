import React, { Component } from "react";

import "./App.css";
import FoodGeneral from "./components/FoodGeneral";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="columns">
            <FoodGeneral />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
