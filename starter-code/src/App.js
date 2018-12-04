import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox/FoodBox'

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: foods
    }
  }

  render() {
    console.log(this.state.foods);

    const foodsHTML = this.state.foods.map(food => <FoodBox {...food} /> );


    return (
      <div className="App container">
        <h1 className="title">IronNutrition</h1>
        {foodsHTML}
      </div>
    );
  }
}

export default App;
