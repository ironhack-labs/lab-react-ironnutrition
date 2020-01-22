import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './Components/FoodBox'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods,
    }
  }

  render() {
    const foodObj = this.state.foods[2];

    return (
      <Foodbox {...foodObj} />
    )
  }
}

export default App;
