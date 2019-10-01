import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import FoodEntry from './FoodEntry'


class App extends Component {
  state = {
    foods: foods,
    showFoods: foods,
    totalCalories: 0,
    cart: {},
    search: ''
  }

  addFood = ({ name, calories, image }) => {
    let newFood = {
      name,
      calories,
      image
    }

    this.setState({
      foods: [...this.state.foods, newFood],
      showFoods: [...this.state.showFoods, newFood]
    })
  }

  addFoodToCart = (food) => {
    let cart = { ...this.state.cart }
    let { name, calories } = food.props
    let { quantity } = food.state

    cart[name] = {
      quantity: (cart[name] ? cart[name].quantity : 0) + quantity,
      calories
    }

    this.setState({
      cart
    }, this.updateTotalCalories)
  }

  getFoodCart = () => {
    return Object.entries(this.state.cart).map(([name, food], i) => {
      let namePlural = name + (food.quantity > 1 && !name.endsWith('s') ? 's' : '')
      let entry = `${food.quantity} ${namePlural} = ${food.calories * food.quantity} cal`
      return <li key={i}>{entry} <a onClick={() => this.removeFoodFromCart(name)}><i className="material-icons">delete</i></a></li>
    })
  }

  removeFoodFromCart = (name) => {
    let cart = { ...this.state.cart }
    delete cart[name]
    this.setState({
      cart
    }, this.updateTotalCalories)
  }

  searchFoods = (event) => {
    let { value } = event.target
    this.setState({ search: value }, () => {
      if (!!this.state.search) {
        this.setState({
          showFoods: this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.search.toLowerCase()))
        })
      } else {
        this.setState({ showFoods: this.state.foods })
      }
    })
  }

  getFoodBoxes = () => {
    return this.state.showFoods.map((food, i) => <FoodBox key={i} addToCart={this.addFoodToCart} name={food.name} image={food.image} calories={food.calories} />)
  }

  updateTotalCalories = () => {
    this.setState({
      totalCalories: Object.values(this.state.cart).reduce((total, { quantity, calories }) => total + (quantity * calories), 0)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input placeholder="Search..." type="text" name="search" onChange={this.searchFoods} value={this.state.search}></input>
        <FoodEntry createFood={this.addFood} />
        <p className="App-intro">
        </p>
        <div id="food-display">
          <div>
            <h2>Today's Foods</h2>
            <ul>
              {this.getFoodCart()}
            </ul>
            <p>Total: {this.state.totalCalories} cal</p>
          </div>
          {this.getFoodBoxes()}
        </div>
      </div>
    );
  }
}

export default App;
