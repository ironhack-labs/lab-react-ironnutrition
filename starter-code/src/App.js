import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox/FoodBox'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1 className="title">IronNutrition</h1>
        <FoodBox />
      </div>
    );
  }
}

export default App;
