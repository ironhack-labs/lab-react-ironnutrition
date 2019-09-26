import React, { Component } from 'react'

import './App.css'
import foods from './foods.json'
import Foodbox from './component/Foodbox'
import 'bulma/css/bulma.css'

class App extends Component {
  state = {
    foods: foods,
    food: {},
    filtered: []
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({ foods: [...this.state.foods, this.state.food] })
  }

  handleInput = e => {
    const { food } = this.state
    const key = e.target.name
    food[key] = e.target.value
    this.setState({ food })
  }

  search = e => {
    const { value } = e.target
    const { foods } = this.state
    const query = value.toLowerCase()
    const filtered = foods.filter(food => food.name.toLowerCase().includes(query))
    this.setState({ filtered })
  }

  render() {
    const { foods, filtered } = this.state
    return (
      <div className="food">
        <div>
          <h1>Foods</h1>
          <input onChange={this.search} type="text" name="search" />

          {filtered.length === 0 && foods.map((food, idx) => <Foodbox key={idx} food={food} />)}
          {filtered.length !== 0 && filtered.map((food, idx) => <Foodbox key={idx} food={food} />)}
          <form onSubmit={this.onSubmit}>
            <input onChange={this.handleInput} type="text" name="name" placeholder="Name" />
            <input onChange={this.handleInput} type="number" name="calories" placeholder="Calories" />
            <input onChange={this.handleInput} type="number" name="quantity" placeholder="Quantity" />
            <input onChange={this.handleInput} type="text" name="image" placeholder="Image Url" />
            <input type="submit" value="Add Food" />
          </form>
        </div>
        <div className="foods-today">
          <h2>Today's foods</h2>
        </div>
      </div>
    )
  }
}

export default App
