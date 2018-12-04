import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json'

import FoodBox from './components/FoodBox/FoodBox'
import NewFoodForm from './components/NewFoodForm/NewFoodForm'
import InputForm from './components/InputForm/InputForm'

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: foods, 
      isFormVisible: false, 
      wordToSearch: ''
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

  searchFoods = (e) => {
    this.setState({...this.state, wordToSearch: e.target.value})
  }

  showFoods = () => this.state.foods.map(food => (food.name.match(new RegExp(this.state.wordToSearch, "i"))) &&  <FoodBox {...food} />)


  render() {
    return (
      <div className="App container">
        <h1 className="title">IronNutrition</h1>

        <InputForm name="search" type="text" placeholder="Search..." handleChange={this.searchFoods} />

        <div className="columns">
          <div className="column">
            {this.showFoods()}
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
