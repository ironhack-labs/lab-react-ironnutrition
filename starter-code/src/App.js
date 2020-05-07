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
    search: '',
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

  updateSearch = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {
    let filteredFood = this.state.allFoods.filter((food) => {
      return food.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })
    return (
      <div className="App">
        {this.state.on && <Form addFood={this.addFood} />}
        <button onClick={this.showForm}>Add Food</button>
        <input
          type="text"
          value={this.state.search}
          placeholder="Search"
          onChange={this.updateSearch.bind(this)}
        />
        {filteredFood.map((food) => (
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
