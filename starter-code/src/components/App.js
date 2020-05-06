import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from '../foods.json'
import FoodBox from '../components/foodBox/FoodBox'
import FoodForm from '../components/foodForm/FoodForm'


class App extends Component {

  constructor() {
    super()
    this.foodsArray = [...foods]
    this.state = {
      displayForm: false,
      newFoods: this.foodsArray
    }
  }

  showForm = () => {
    this.setState({displayForm: !this.state.displayForm})
  }

  addFood = theNewFoods => {
    const foodsArrayCopy = [...this.state.newFoods]
    foodsArrayCopy.push(theNewFoods)
    this.setState({newFoods: foodsArrayCopy})
  }

  render() {
    return (
      <main>
        <header>
          <h1>IronNutrition</h1>
        </header>
      {
        this.state.newFoods.map((eachFood, idx) => <FoodBox key={idx} {...eachFood} />)
      }
      <button onClick={this.showForm}>Add Food</button>
        {this.state.displayForm && <FoodForm addFood={this.addFood} />}

      </main>    
    )
  }
}

export default App;
