import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'

class App extends Component {
  state = {
    allFoods: foods,
  }

  render() {
    return (
      <div className="App">
        {this.state.allFoods.map((food) => (
          <FoodBox
            key={food.id}
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
          />
        ))}
      </div>
    )
  }
}

export default App
