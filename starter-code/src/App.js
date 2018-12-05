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
      foods: Food
    }
  }
  toggle = () => {
    let show = !this.state.show
    this.setState({ show: show })
  }

  addFoodHandler = (oneFood) => {
    const foodCopy = [...this.state.foods];
    foodCopy.push(oneFood);
    this.setState({
      foods: foodCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <button onClick={this.toggle}>Add Food</button>
        {this.state.show && <Form addTheFood={this.addFoodHandler} />}
        {this.state.foods.map(x=><FoodBox food={x}/>)}
        {/* {this.state} */}
      </div>
    );
  }
}

export default App;
