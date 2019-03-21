import React, { Component } from 'react'

import FoodBox from './FoodBox'
import AddFood from './AddFood'
import Search from './Search'
import Cartito from './Cartito'

import importedFoods from '../foods.json'

export default class FoodList extends Component {
  constructor(){

    super();
    this.state = {
      foods: importedFoods

    }

  }
  addFood = theFood => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(theFood)
    this.setState({
      foods: foodsCopy
      
    })
  
  }

  searchFood = search => {
    // console.log(search)
    let foodsCopy = [...this.state.foods]
    foodsCopy = foodsCopy.filter(word => word.name.includes(search))
    this.setState({
      foods: foodsCopy
      
    })

  }

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <Search searchFood={this.searchFood}/>

        <div class="columns">

          <div class="column">
            <AddFood addFood={this.addFood}/>

            {this.state.foods.map((food, index) =>
            <FoodBox key={index} {...food}/>)}
          </div>

          <div class="column">
            <h2>Today's foods</h2>
            <Cartito />
            
          </div>
        </div>
      </div>



    )
  }
}
