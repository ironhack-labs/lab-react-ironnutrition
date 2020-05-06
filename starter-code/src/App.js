import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import Foods from './foods.json'
import FoodBox from './components/foodBox/foodBox'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: [...Foods],
    }
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-half">
          {this.state.foods.map((elm, idx) => (
          <FoodBox
            key={idx}
            name={elm.name}
            calories={elm.calories}
            image={elm.image}
            quantity={elm.quantity}
          />
          ))}
        </div>
      </div>
    )
  }
}

export default App
