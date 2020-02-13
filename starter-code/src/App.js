import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./FoodBox"


const allFoods = foods

// console.log(allFoods[0])
class App extends Component {


  state = {
    food: allFoods
  }

  handleSubmit = (state,e) => {
    e.preventDefault()
    state.foodForm = false;
    // console.log(state) // This is the Child's state
    let x = {name:state.name,calories:state.calories,image:state.img,quantity:0}
    // console.log(x)
    let newStateFood = [...this.state.food] // This is a copy of the App js state
    newStateFood.push(x)
    // console.log(newStateFood)
    this.setState({  // Sets the state to current file
      food: newStateFood
    })
  }

  render() {
    return (
      <div className="App">
        <FoodBox
          foodsProp     = {this.state.food}
          handleSubmit  = {this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
