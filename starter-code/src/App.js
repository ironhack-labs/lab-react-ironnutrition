import React, { Component } from 'react';
import './App.css';
import FoodBox from "./components/FoodBox";
import foods from './foods.json'
import 'bulma/css/bulma.css';
import AddFoodForm from './components/AddFoodForm'

class App extends Component {

  state = {
    food: foods
  }

  render () {
    return (
        <div>
        <h1>Iron Nutrition</h1>
          <AddFoodForm />
          {this.state.food.map((e, index)=>{
           return <FoodBox key={index} {...e} />
          })}
        </div>
    )
  }
}

export default App;
