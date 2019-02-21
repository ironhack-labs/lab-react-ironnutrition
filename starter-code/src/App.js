import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/searchBar';

class App extends Component {

  state = {
    foods
  }

  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(food)
    this.setState(
      { foods: foodsCopy }
    )
  }

  showForm = () => {
    document.querySelector(".show").style.display = "block";
  }

  searchFunction = (searchWord) => {
    let newState = {
      ...this.state
    }
    newState.foods = foods.filter(food => {
      return food.name.indexOf(searchWord) !== -1;
    })

    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <SearchBar Prop={this.searchFunction} />
        <FoodBox foods={this.state.foods} />
        <AddFood addFoodProps={this.addFoodHandler} />
        <button onClick={this.showForm}>Add food</button>
      </div>
    );
  }
}

export default App;
