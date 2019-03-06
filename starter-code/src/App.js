import React, { Component, Fragment } from 'react';
import './App.css';
import FoodBoxList from './models/FoodBoxList.js';
import addFood from './models/AddFood.js';

class App extends Component {
  render() {
    return (
    <div className="App">
      <FoodBoxList />
      <addFood></addFood>
    </div>
    );
  }
}

export default App;
