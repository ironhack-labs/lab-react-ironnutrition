import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import foods from './foods.json';

import FoodBox from './components/FoodBox'
import CreateFood from './components/CreateFood'
import SearchBar from './components/SearchBar'

export default class App extends Component {

  state = {
    foods: foods,
    searchInput: ""
  }

  addFood = food => {
    this.setState({foods: [...this.state.foods, food]}) ;
  }

  updateInput = searchInput => {
    this.setState({searchInput: searchInput})
  }

  render() {
    console.log(this.state.searchInput)
    return (
      <div className="App">
        <SearchBar
          searchInput={this.state.searchInput}
          updateInput={this.updateInput}
        />
        <CreateFood
          addFood={this.addFood}
        />
        {
        this.state.foods
          .filter(food => food.name.match(new RegExp ("^" + this.state.searchInput, "i")))
          .map((food, index) => 
          <FoodBox
            food={food}
            key={index}
          />
        )
        }
      </div>
    );
  }

}