import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import FoodList from './components/FoodList/FoodList';
import NewForm from './components/NewForm/NewForm'
import food from './foods.json'

class App extends Component {
  state = {
    food: [...food],
    todayFood: []
  }

  addFood = (food) => {
    const newFoodItem = {
      ...food,
      id: uuidv4()
    }
    this.setState({
      food: [newFoodItem, ...this.state.food]
    })
  }

  render(){
    const { food } = this.state

    return (
      <div className="App container">
        <div className="row workspace">
          <h2 className='mt-4'>Today's food</h2>
        </div>
          <NewForm addFood={this.addFood} />
        <hr />
        <div className='row'>
          <FoodList food={ food } />
        </div>
      </div>
    );
  }
}

export default App;
