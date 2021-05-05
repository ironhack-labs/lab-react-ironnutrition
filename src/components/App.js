import React from 'react';
import { Component } from 'react'
import './App.css';
import foods from './../foods.json'
import FoodBox from './FoodBox'
import NewFoodForm from './NewFoodForm'
import Search from './Search'
import Cart from './Cart'


const foodListCopy = JSON.parse(JSON.stringify(foods))

class App extends Component {

  constructor() {
    super()
    this.state = {
      foodList: foods,
      cartList: []
    }
  }

  createFood(newFood) {
        const foodListCopy = [...this.state.foodList]
        foodListCopy.push(newFood)
        this.setState({foodList: foodListCopy })
  }

  filterList(query) {
      const filteredFood = foodListCopy.filter(food => food.name.toLowerCase().includes(query.toLowerCase()))
      this.setState({foodList: filteredFood })
  }

  addToCart(productName, productQuantity, productCalories) {
    const cartListCopy = [...this.state.cartList]
    cartListCopy.push({name: productName, quantity: productQuantity, calories: productCalories})
    this.setState({cartList: cartListCopy})
  }

  render() {
      return(
        <section>
          <h1>Food list</h1>
        {<NewFoodForm addFood={food => this.createFood(food)}/>}
        {<Search filterFood={query => this.filterList(query)}/>}
        {this.state.foodList.map((elm, idx) => <FoodBox key={idx} addCart={() => this.addToCart(elm.name, elm.quantity, elm.calories)} {...elm}/>)}
        {<Cart/>}
        </section>
        
      )
  }
}

export default App;
