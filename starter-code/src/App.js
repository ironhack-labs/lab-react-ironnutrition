import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import SearchBox from './components/SearchBox'

class App extends Component {
  state = {
    allFoods: foods,
    isActive: false,
    searchfield: '',
    todaysFood: []
  }

  addFood = food => {
    this.setState(prevState => {
      return { allFoods: [...prevState.allFoods, food] }
    })
  }

  handleActive = () => {
    this.setState(prevState => {
      isActive: !prevState.isActive
    })
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
  }

  handleAddition = event => {
    console.log(event)
  }

  render() {
    const filteredFoods = this.state.allFoods.filter(food => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase())
    })
    console.log(filteredFoods)
    return (
      <div className="App">
        <SearchBox searchChange={this.onSearchChange} />
        <button className="button">Add Food</button>
        <AddFood addFood={this.addFood} />

        {filteredFoods.map(el => {
          return <FoodBox handleAddition={this.handleAddition} {...el} />
        })}
      </div>
    )
  }
}

export default App
