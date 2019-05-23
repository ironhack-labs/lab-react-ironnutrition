import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodList from './components/FoodList'
import AddForm from './components/AddForm'
import SearchBar from './components/SearchBar'
import SummaryList from './components/SummaryList'

class App extends Component {
  state = {
    foods: [...foods],
    todaysFood: []
  }

  addFood = food => {
    this.setState({
      foods: [...this.state.foods, food]
    })
  }

  addTodaysFood = (index, amount) => {
    const obj = {
      name: foods[index].name,
      amount: amount,
      calories: foods[index].calories * amount
    }
    this.setState({
      todaysFood: [...this.state.todaysFood, obj]
    })
  }

  searchFood = (text) => {
    this.setState({
      foods: foods.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    })
  }

  render() {

    return (
      <div className="App container">
        <SearchBar searchFood={this.searchFood}/>
        <div className="food-section mt-5">
          <div className="food-section-wrapper">
            <FoodList foods={this.state.foods} addTodaysFood={this.addTodaysFood}/>
          </div>
          <div className="food-section-summary">
            <h2>Today's foods</h2>
            <SummaryList foods={this.state.todaysFood} />
            <p>Total cal</p>
          </div>
        </div>
        <AddForm addFood={this.addFood}/>
      </div>
    );
  }
}

export default App;
