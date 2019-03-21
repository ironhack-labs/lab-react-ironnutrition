import React, { Component } from 'react'
import FoodBox from './FoodBox'

export default class Cartito extends Component {
  constructor(){
    super()

    this.state = {
        cartfood: [],
        
    }
  }
  
  addFoodCart = theFoodCart => { // EN CONSTRUCCIÓN
    
    const cartFoodCopy = [...this.state.cartfood]
    foodsCartCopy.push(theFoodCart)
    this.setState({
      cartfoods: foodsCartCopy
      
    })
  
  }

  render() {
    return (
      <div>
        {this.state.cartfood.map()}
        
        <FoodBox addFoodCart={this.addFoodCart}/>
        
      </div>
    )
  }
}
