import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import foods from './foods.json';

import FoodBox from './components/FoodBox'
import CreateFood from './components/CreateFood'
import SearchBar from './components/SearchBar'
import TodayFood from './components/TodayFood'

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

  updateTodayFoodQuantity = (name, value) => {
    const foods = [...this.state.foods]
    foods.forEach(food => food.quantity = food.name === name ? food.quantity+Number(value) : food.quantity )
    this.setState({foods: foods})
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchInput={this.state.searchInput}
          updateInput={this.updateInput}
        />
        <CreateFood
          addFood={this.addFood}
        />
        <div className="main">
          <div className="foodBox">
            {
            this.state.foods
              .filter(food => food.name.match(new RegExp ("^" + this.state.searchInput, "i")))
              .map((food, index) => 
              <FoodBox
                food={food}
                key={index}
                updateTodayFoodQuantity={this.updateTodayFoodQuantity}
              />
            )
            }
          </div>
          <div className="todayFood">
            <TodayFood
              foods={this.state.foods}
            />
          </div>

        </div>
      </div>
    );
  }

}