import React, { Component } from 'react';
import './App.css';
import { foods } from './foods';
import FoodBox from './components/FoodBox'
import _ from 'lodash'
import AddFood from './components/AddFood'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      foods: foods
    };
  }
  addFoodHandler = (newFood) => {
    this.setState({
      foods: this.state.foods.concat(newFood)
    })
  }

  render() {

    return (
      <div className="App">
        <h1 className="title is-1">Iron Nutrion</h1>

        <div>
          {this.state.foods.map(food => {
            console.log(food)
            return <FoodBox food={food} key={food.name} />
          })}
        </div>
        <div>
          <AddFood addFoodHandler={this.addFoodHandler} />
        </div>
      </div>
    )


  }
}

export default App;
