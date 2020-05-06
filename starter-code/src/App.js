import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import Foods from './foods.json'
import FoodBox from './components/foodBox/foodBox'
import FoodForm from './components/foodForm/foodForm'
import SearchBar from "./components/searchBar/searchBar"
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      displayForm: false,
      foods: [...Foods],
    }
  }

  pushNewFood = (newFood) => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)
    this.setState({ foods: foodsCopy })
  }

  toggleFormDisplay = () => this.setState({displayForm: !this.state.displayForm})

  render() {
    return (
      <main>
        <div className="columns">
          <div className="column">
            <nav>
              <a onClick={this.toggleFormDisplay} className="button">
                Add Food
              </a>
            </nav>
            <nav>
              <SearchBar/>
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
          {this.state.displayForm && <FoodForm addFood={this.pushNewFood} />}
          </div>
        </div>
      </main>
    )
  }
}

export default App
