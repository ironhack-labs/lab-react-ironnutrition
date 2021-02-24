import React from 'react'
import FoodBox from './FoodBox'
import foods from './../foods.json'
import { Component } from 'react'
import AddFoodForm from './AddFoodForm'
import Search from './Search'

import 'bulma/css/bulma.css'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods,
      newFood: false,
    }
  }

  displayForm() {
    this.setState({ newFood: true })
  }

  addFood(food) {
    const foodCopy = this.state.foods.push(food)
    this.setState({
      food: foodCopy,
      newFood: false
    })
  }

  searchFood(food) {
    const filteredFoods = foods.filter(elm => elm.name.toUpperCase().includes(food.name.toUpperCase()))
    this.setState({ foods: filteredFoods })
  }

  addQuantity(food) {
    const selectedFoods = this.state.foods.map(elm => {
      elm.name === food.name && elm.quantity++
      return elm
    })
    console.log(selectedFoods)
    this.setState({ foods: selectedFoods })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.displayForm()}>Add new food</button>
        { this.state.newFood && <AddFoodForm addFood={food => this.addFood(food)} />}
        <Search searchFood={food => this.searchFood(food)} />
        <div>
          <h3>Today's foods</h3>

        </div>
        { this.state.foods?.map((elm, i) => <FoodBox {...elm} addQuantity={name => this.addQuantity(name)} key={i} />)}
      </div>
    )
  }
}

export default App