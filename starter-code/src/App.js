import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from "./FoodBox/food.js"
import Food from "./foods.json"
import Form from "./Form/Form.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      foods: Food.map(foods => {
        return <FoodBox {...foods} />
      })
    }
  }
  toggle = () => {
    let show = !this.state.show 
    this.setState({ show: show })
  }
  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <button onClick={this.toggle}>Add Food</button>
        {this.state.show && <Form />}
        {this.state.foods}
      </div>
    );
  }
}

export default App;
