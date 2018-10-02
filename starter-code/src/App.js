import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FoodMenu } from "./components/foodmenu"


class App extends Component {
  render() {
    return (
      <FoodMenu/>
    );
  }
}

export default App;
