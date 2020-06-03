import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './Components/FoodBox';

class App extends Component {
  state = {
    food: foods,
  };

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        {this.state.food.map((items) => {
          return <Foodbox {...items} />;
        })}
      </div>
    );
  }
}

export default App;
