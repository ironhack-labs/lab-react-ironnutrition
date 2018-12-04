import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox/FoodBox'
import NewFoodForm from './components/NewFoodForm/NewFoodForm'

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: foods, 
      isFormVisible: false
    }
  }

  changeFormVisibility = () => {
    this.setState({...this.state, isFormVisible: !this.state.isFormVisible})
  }

  addFood = (food) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);

    this.setState({...this.state, foods: foodsCopy})

  }

  render() {
    const foodsHTML = this.state.foods.map(food => <FoodBox {...food} /> );

    return (
      <div className="App container">
        <h1 className="title">IronNutrition</h1>
        <div className="columns">
          <div className="column">
            {foodsHTML}
          </div>
          <div className="column container">
            
            {this.state.isFormVisible ? <NewFoodForm closeForm={this.changeFormVisibility} addFood={this.addFood} /> : <button className="button is-primary"onClick={this.changeFormVisibility}>Add Food</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
