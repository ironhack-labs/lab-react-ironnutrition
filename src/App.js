import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Food from './Food'
import AddFood from './AddFood'
import Search from './Search'
import _ from 'lodash'

class App extends Component {
  state = {
    foods: foods,
  }

  addFoodHandler = (newFood) => {
    this.setState({
      foods: this.state.foods.concat(newFood)
    })
  }

  searchHandler = (imput) => {
console.log(imput)
    // this.setState ({
    //   foods: _.filter(foods, { 'name': {imput})
    // })


  }

  render() {
    return (
  

    <div className="App">
<AddFood addFoodHandler={this.addFoodHandler}></AddFood>
<Search searchHandler={this.searchHandler}  ></Search>

{this.state.foods.map((f) => <Food name={f.name} calories={f.calories} image={f.image} />)}
    </div>
  )
}}

export default App;
