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
    todaysFood: [],
    totalCal: 0
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
    const newObj = [...this.state.todaysFood, obj]

    this.setState({
      todaysFood: Object.values(newObj.reduce((acc, item) => {
        if(acc[item.name]) {
          acc[item.name] = {...acc[item.name], amount:acc[item.name].amount+item.amount}
        }
        else {
          acc[item.name] = {...item}
        }
        return acc
      }, {}))
    })
  }

  removeTodaysFood = num => {

    const obj = [...this.state.todaysFood]
    obj.splice(num, 1)
    this.setState({
      todaysFood: [...obj]
    })
  }

  searchFood = (text) => {
    this.setState({
      foods: foods.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    })
  }

  addCal = (num) => {
    this.setState({
      totalCal: this.state.totalCal + num
    })
  }

  render() {

    return (
      <div className="App container">
        <SearchBar searchFood={this.searchFood}/>
        <div className="food-section mt-5">
          <div className="food-section-wrapper">
            <FoodList foods={this.state.foods} addTodaysFood={this.addTodaysFood} addCal={this.addCal}/>
          </div>
          <div className="food-section-summary">
            <h2>Today's foods</h2>
            <SummaryList foods={this.state.todaysFood} removeTodaysFood={this.removeTodaysFood} />
            <p>Total {this.state.totalCal} cal</p>
          </div>
        </div>
        <AddForm addFood={this.addFood}/>
      </div>
    );
  }
}

export default App;
