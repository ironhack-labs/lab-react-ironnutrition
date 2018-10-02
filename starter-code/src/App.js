import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from "./foods.json"
import 'bulma/css/bulma.css';
import {FoodBox} from './components/foodbox'


class App extends Component {
  render() {
    return (
      <FoodBox/>
    );
  }
}

export default App;
