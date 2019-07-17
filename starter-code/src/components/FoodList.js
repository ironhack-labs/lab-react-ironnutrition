import React, { Component } from 'react'
import Data from '../foods.json'
import  FoodBox from './FoodBox'

export default class FoodList extends Component {

  
  state={
    foodsElements:Data
  }

  handleInput=e=>{
      const {target: {name, value}} = e
      console.log("si jala")

      this.setState({[name]: value})
  }
  
     addFood=()=>{
      let initialFoods=[...this.state.foodsElements]
        initialFoods.push(Data)

      }
  render() {
    const {foodsElements} =  this.state
    return (
     <div>
        <p>{console.log(this.state.foodsElements)}</p>

        {foodsElements.map((food, i) => (<FoodBox {...food} test={this.handleInput} key ={i}/>)) }
     </div>
    )
  }
}
