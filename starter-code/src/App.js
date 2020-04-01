import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from "./components/foodBox"
import ShowFood from "./components/showFood"

class App extends Component {
  render() {
    return (
      <div className="App">
       <ShowFood />
      </div>
    );
  }
}

export default App;
