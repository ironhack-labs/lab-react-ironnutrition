import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';

export class App extends Component {

  state = {
    foods: foodsJSON,
  }

  addFoodHandler = (newFood) => {
    this.setState({
      foods:
        [newFood, ...this.state.foods]
    })
  }

  render() {
    return (
      <div>
        <FoodForm addFood={this.addFoodHandler} />

        { this.state.foods.map((item, index) => (
          <FoodBox key={index} foods={item} />
        ))}


      </div>
    )
  }
}

export default App;
