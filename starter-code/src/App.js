import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from "./FoodBox/food.js"
import "./foods.json"

class App extends Component {
  render() {
    return (
      <FoodBox></FoodBox>
    );
  }
}

export default App;
