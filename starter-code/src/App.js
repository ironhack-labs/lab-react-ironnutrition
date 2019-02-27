import React, { Component } from "react"
import "./App.css"
import foodsImp from "./foods.json"
import FoodBox from "./components/FoodBox"

class App extends Component {
  state = {
    food: {},
    foods: [],
    cart: [],
    total: 0
  }

  componentWillMount() {
    this.setState({ foods: foodsImp })
  }

  onChangeSearch = e => {
    let search = e.target.value.toLowerCase()
    if (search === "") return this.setState({ foods: foodsImp })
    let arr = this.state.foods.filter(w =>
      w.name.toLowerCase().includes(search)
    )
    this.setState({ foods: arr })
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

  saveAmount = (e, i) => {
    console.log(e.target.value)
    let { foods } = this.state
    foods[i].quantity = e.target.value
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
        <input
          onChange={this.onChangeSearch}
          type="text"
          name="search"
          className="input search-bar"
        />
        {foods.map((f, i) => (
          <FoodBox
            food={f}
            addCart={this.addCart}
            saveAmount={this.saveAmount}
            key={i}
            index={i}
          />
        ))}
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            {cart.map((c, i) => (
              <li key={i}>
                {c.quantity} {c.name} = {c.calories} cal{" "}
                {/* <span onClick={(el, index) => this.deleteCart(index)}>🗑</span> */}
              </li>
            ))}
          </ul>
          <strong>Total: {this.state.total} cal</strong>
        </div>
      </div>
    )
  }
}

export default App
