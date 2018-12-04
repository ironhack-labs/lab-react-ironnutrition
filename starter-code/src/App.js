import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from "./FoodBox/food.js"
import Food from "./foods.json"
// import Form from "./Form/Form.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: Food.map(foods => {
        return <FoodBox {...foods} />
      })
    }
  }
  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        {/* <Form></Form> */}
        {/* <FoodBox></FoodBox> */}
        {this.state.foods}
      </div>
    );
  }
}

export default App;
