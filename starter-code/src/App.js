import React, { Component } from 'react';
import './App.css';
import "bulma/css/bulma.css"
import FoodBox from "./components/FoodBox"


class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="title">IronNutrition</p>
        {
          <FoodBox />
        }
      </div>
    );
  }
}

export default App;
