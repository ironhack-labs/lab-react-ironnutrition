import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBox from './components/FoodBox'

class App extends Component {

  constructor() {
    super();
    this.state = {
      foods: foods
    }
  }

  render() {

    console.log();

    return (
      <React.Fragment>
        {
          this.state.foods.map((food, i) => 
            <FoodBox key={i} name={food.name} img={food.image} calories={food.calories} quantity={food.quantity}></FoodBox>
          )}
      </React.Fragment>
    );
  }
}

export default App;
