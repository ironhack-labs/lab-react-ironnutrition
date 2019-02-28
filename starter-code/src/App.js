import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from "./components/FoodBox"
import foods from './foods.json'

class App extends Component {
state = {
  food:{},
  foods:[],
  cart:[],
  total:0
}

componentWillMount(){
  this.setState({foods:foods})
}

onChangeSearch = event => {
  let search = event.target.value.toLowerCase()
  if (search === "") return this.setState({ foods: foods })
  let array = this.state.foods.filter(food =>
    food.name.toLowerCase().includes(search)
  )
  this.setState({ foods: array })
}

addCart = (index, quantity) => {
  let { total, foods, cart } = this.state
  let itemAdded = { ...foods[index] }
  itemAdded.calories = quantity * itemAdded.calories
  total += itemAdded.calories
  cart.push(itemAdded)

  // Total

  this.setState({ cart: cart, total: total })
}

saveAmount = (event, i) => {
  console.log(event.target.value)
  let { foods } = this.state
  foods[i].quantity = event.target.value
  this.setState({ foods })
}

deleteCart = index => {
  console.log(index)
}


  render() {
    let { foods, cart } = this.state
    return (
      <div>
        <h1>IronNutrition</h1>
        <input onChange={this.onChangeSearch} type="text" name="search" className="input search-bar"/>
        {foods.map((food, index) => (
          <FoodBox food={food} addCart={this.addCart} saveAmount={this.saveAmount} key={index} index={index}/>
        ))}
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            {cart.map((cart, index) => (
              <li key={index}>
                {cart.quantity} {cart.name} = {cart.calories} cal{" "}
              </li>
            ))}
          </ul>
          <strong>Total: {this.state.total} cal</strong>
        </div>
      </div>
    );
    
  }
}

export default App;
