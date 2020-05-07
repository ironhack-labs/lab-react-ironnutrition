import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import Form from './components/Form'

class App extends Component {
  state = {
    allFoods: foods,
    on: false,
  }

  showForm = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  addFood = (food) => {
    const newFood = [...this.state.allFoods, food]
    this.setState({
      allFoods: newFood,
    })
  }

  add

  render() {
    return (
      <div className="App">
        {this.state.on && <Form addFood={this.addFood} />}
        <button onClick={this.showForm}>Add Food</button>
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
