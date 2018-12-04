import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './Component/FoodBox/FoodBox'

class App extends Component {
  render() {
    return (
      <FoodBox></FoodBox>
    );
  }
}

export default App;
