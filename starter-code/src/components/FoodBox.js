import React, { Component } from 'react'
import data from '../foods.json'
import FoodSingle from './FoodSingle.js'
import AddFood from './AddFood.js'

export default class FoodBox extends Component {
  state = {
    foods: data
  }
  addFood = food => {
    this.setState(({ foods }) => ({ foods: [...foods, food] }))
  }

  render() {
    const { foods } = this.state
    return (
      <div>
        <AddFood addFood={this.addFood} />
        <FoodSingle foods={foods} />
      </div>
    )
  }
}
