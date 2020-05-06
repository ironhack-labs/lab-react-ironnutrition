import React, { Component } from 'react'
import './App.css'
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox.js'
import Search from './components/Search'

class App extends Component {
  state = {
    foods,
    allfoods: foods,
    cal: 0,
  }
  searchFood = (e) => {
    //const foundFood = [... this.state.foods]
    if (e.target.value) {
      const filteredFoods = [...this.state.foods].filter((food) =>
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      this.setState({ foods: filteredFoods })
    } else {
      this.setState({ foods: this.state.allfoods })
    }
  }

  handleInputChange = ({ target: { name, value } }) => {
    // this.setState({ [name]: value })
    console.log(name)
    console.log(value)
  }

  handleFormSubmit = (e) => {
    e.prevent.default
    console.log(e.target)
  }
  render() {
    return (
      <div className="App">
        <Search fcn={this.searchFood} />
        <div>
          {this.state.foods.map((food, idx) => (
            <FoodBox
              className="FoodBox"
              food={food}
              key={idx}
              handleInputChange={this.handleInputChange}
            />
          ))}
        </div>
        <div>
          <h1>Today's Foods </h1>
          <p>Total: {this.state.cal} cal</p>
        </div>
      </div>
    )
  }
}

export default App
