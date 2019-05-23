import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodList from './components/FoodList'
import AddForm from './components/AddForm'

class App extends Component {
  state = {
    foods: foods.map(item => item)
  }

  addFood = food => {
    this.setState({
      foods: [...this.state.foods, food]
    })
  }

  render() {
    return (
      <div className="App container">
        <FoodList foods={this.state.foods}/>
        <AddForm addFood={this.addFood}/>
      </div>
    );
  }
}

export default App;
