import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import FootBox from './components/FoodBox'
import TodaysFood from './components/TodaysFood'
import Search from './components/Search'



class App extends Component {


  state = {
    foods: foodsJson,
    cloneFoods: foodsJson,
    list: []

  }

  handlePlus = (event) => {
    event.preventDefault()

    console.log(event.target.querySelector('.input').value)

    let todayList = {
      name: event.target.querySelector('.name').textContent,
      calories: event.target.querySelector('.calories').textContent,
      quantity: event.target.querySelector('.input').value
    }

    this.setState({
      list: [todayList, ...this.state.list]
    })
  }

  handleAddNewFoot = (newFood) => {

    this.setState({
      foods: [newFood, ...this.state.foods]
    })

  }

  handleSearch = (event) => {

    let { foods } = this.state

    let searchFood = event.target.value

    let filteredFood = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchFood.toLowerCase())
    })

    this.setState({
      cloneFoods: filteredFood
    })

  }

  render() {
    return (
      <div>
        <h1>This is the Ironnutriation Lab</h1>
       <Search onSearch={this.handleSearch} />
        <FootBox 
        foods={ this.state.cloneFoods } 
        onPlus={this.handlePlus}
        onAddNewFoot={this.handleAddNewFoot}
        />
        <TodaysFood list={ this.state.list } />

      </div>
    )
  }
}


export default App;
