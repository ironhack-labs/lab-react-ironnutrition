import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import AddFood from './components/AddFood'

class App extends Component {

  state = {
    foods: foods,
    ShowForm: false
  }

  showForm = () => {
    this.setState({ ShowForm: !this.state.ShowForm })
  }

  addFood = (food) => {
    let newArray = [...this.state.foods]
    newArray.push(food)

    this.setState({ foods: newArray })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.showForm}>Crear</button>
        <h2>Add Food</h2>
        {this.state.ShowForm ? <AddFood addFood={this.addFood} /> : ''}
        {this.state.foods.map((foods, i) => <FoodBox {...foods} key={i} />)}
      </div>
    );
  }
}

export default App;
