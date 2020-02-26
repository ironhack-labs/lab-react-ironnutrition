import React, { Component } from 'react'
import './App.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox'
import 'bulma/css/bulma.css'
import AddFood from './components/Form/Form'


class App extends Component {
  constructor() {
    super()
    this.state = {
      foods
    }
  }
  addNewFood = theFood => {
    console.log(theFood)
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(theFood)
    this.setState({ foods: foodsCopy })
  }
  render() {
    return (
      <div>

        <AddFood addNewFood={this.addNewFood}></AddFood>
        <main>
          {this.state.foods.map((elm, idx) => <FoodBox key={idx} {...elm} />)}
        </main>

      </div>

    )
  }
}

export default App
