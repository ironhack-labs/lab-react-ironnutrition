import React, { Component } from 'react';
import FootBox from './components/FoodBox';

import "bulma/css/bulma.css";
import './App.css';
import foods from "./foods.json";

class App extends Component {
  state = {
    foods: foods
  }

  render() {
    return (
      <div className="App container">
        <h1 className="title">IronNutrition</h1>
        <div className="columns">
          <div className="column">
            {this.state.foods.map(item => {
              return <FootBox key={item.name} food={item}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
