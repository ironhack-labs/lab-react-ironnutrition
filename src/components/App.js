import React from 'react';
import './App.css';
import foodsFromJson from "./../foods.json"
import Foodbox from './Foodbox'
import NewFoodForm from './NewFoodForm'

import { Component } from 'react';
import Search from './Search';

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: foodsFromJson,
      searchValue: ''
    }
  }

  createFood(newFood) {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)
    this.setState({
      foods:foodsCopy
    })
  }

  searchFood(value) {
    this.setState({
      searchValue: value
    })
  }
  
  render() {
    const filteredFoods = this.state.foods.filter(elm => elm.name.includes(this.state.searchValue))

    return (
      <section>
        <NewFoodForm addFood={food=>this.createFood(food)}/>
        <hr></hr>
        <Search searchFor={value=>this.searchFood(value)}/>
      <hr></hr>
     {filteredFoods.reverse().map((elm, idx) => <Foodbox key={idx} food={elm} />)}
    </section>
    )
  }
}

export default App;
