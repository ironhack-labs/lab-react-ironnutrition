import React, { Component } from 'react'

import foods from './foods.json';
import FoodBox from './FoodBox';
import AddNewFood from './AddFood';
import Search from './Search';
import List from './List';

import 'bulma/css/bulma.css';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      food: foods,
      isClicked: false,
      newFood: []
    }

  }

  addFood = (newFood) => {
    const foodCopy = [...this.state.food]
    foodCopy.push(newFood)

    this.setState({
      food: foodCopy
    })
  }

  filterSearch = (searchFood) => {
    const { food } = this.state

    const newFood = food.filter(eachFood => eachFood.name === searchFood)

    this.setState({
      food: newFood
    })
  }


  changeState() {
    this.setState({
      isClicked: true,
    })
  }




  render() {
    return (
      <div className="app-body">
        <div className="lista">
          <Search filterSearch={this.filterSearch} /> <br />
        </div>

        <div className="left">
          <button onClick={() => this.changeState()}>
            Add Food
          </button> <br />

          {this.state.isClicked ? <AddNewFood addFood={this.addFood} /> : null}  <br />

          {
            this.state.food.map(eachFood => <FoodBox key={eachFood.id} {...eachFood} />)
          }
        </div>

        <div className="lista">
          <h1>Today's picks</h1>
        </div>
      </div>
    )
  }
}

export default App;

