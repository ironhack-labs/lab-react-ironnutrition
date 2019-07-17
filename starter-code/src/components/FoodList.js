import React, { Component } from 'react'
import Data from '../foods.json'
import  FoodBox from './FoodBox'

export default class FoodList extends Component {

  state={
    foodsElements:Data
  }
  render() {
    const {foodsElements} =  this.state
    return (
     <div>
        <p>{console.log(this.state.foodsElements)}</p>

        {foodsElements.map((food, i) => (<FoodBox {...food} key ={i}/>)) }
     </div>
    )
  }
}
