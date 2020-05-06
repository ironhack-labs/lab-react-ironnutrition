import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import Foods from './foods.json'
import FoodBox from './components/foodBox/foodBox'
import FoodForm from './components/foodForm/foodForm'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: [...Foods],
    }
  }

  pushNewFood = (newFood) => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)
    this.setState({ foods: foodsCopy })
  }

  render() {
    return (
      <main>
        <div className="columns">
          <div className="column">
            <nav>
              <a href="#" className="button">
                Add Food
              </a>
            </nav>
          </div>
        </div>
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
          <div className="column is-half">
            <FoodForm addFood={this.pushNewFood} />
          </div>
        </div>
      </main>
    )
  }
}

export default App
