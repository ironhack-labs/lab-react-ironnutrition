import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Foods from './foods.json'

import FoodBox from './components/foodBox/FoodBox'
import NewFoodForm from './components/newFoodForm/NewFoodForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: Foods,

      showForm: false,

      search: ''
    }
  }

  toogleForm = () => this.setState({ showForm: !this.state.showForm })


  addNewFood = (newFood) => {
    let foodsCopy = [...this.state.foods]

    foodsCopy.push(newFood)

    this.setState({ foods: foodsCopy })

  }


  handleChanges = e => {

    let { name, value } = e.target


    this.setState({
      search: {
        ...this.state.search,
        [name]: value
      }
    })

    const startsWithN = this.state.foods.filter(food => {
      return food.name.startsWith(e.target.value)
    })

    this.setState({ foods: startsWithN })

  }

  addOne = idx => {
    let foodsCopy = [...this.state.foods]
    foodsCopy[idx].quantity += 1

    this.setState({ foods: foodsCopy })
  }


  render() {
    return (
      <div>
        <h1>IronNutrition</h1>

        <button onClick={this.toogleForm}>Add new food</button>

        <div className="field">
          <label className="name">Search</label>
          <div className="control" onChange={this.handleChanges}>
            <input className="input" name='search' type="text" placeholder="Text input" />
          </div>
          <p className="help">This is a help text</p>
        </div>

        {this.state.showForm ? <NewFoodForm unShowForm={this.toogleForm} newFood={this.addNewFood} /> : null}

        {this.state.foods.map((elm, idx) => <FoodBox key={idx} {...elm} addOne={() => this.addOne(idx)} />)}

      </div>
    );
  }
}

export default App;
