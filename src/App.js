import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foodsData from './foods.json';
import FoodBox from "../src/Components/FoodBox/FoodBox";

const foodList = [...foodsData]

export default class App extends Component {

  state = { food: foodList };

  displayFood = () =>{
    return this.state.food.map((food) =>{
      return(
        <FoodBox {...food} key={food.id} />
      )
    })
  }

  render() {

    return (

      <div className="App">
      <h1>IronNutrition</h1>
      <div>
        { this.displayFood() }
      </div>

      </div>
    );
  }
}