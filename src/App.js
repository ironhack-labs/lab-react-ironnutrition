import React, { Component } from 'react';
import './App.css';
import FoodList from './components/FoodList/FoodList';
import NewForm from './components/NewForm/NewForm'
import food from './foods.json'

class App extends Component {
  state = {
    food: [...food],
    todayFood: []
  }

  AddFood = (food) => {
    const newFoodItem = {
      ...food,
      id: 33
    }
    this.setState({
      food: [...newFoodItem, ...this.state.food]
    })
  }

  render(){
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
