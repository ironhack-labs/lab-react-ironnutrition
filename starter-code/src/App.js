import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

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

  // hideForm = () => {
  //   console.log("hp")
  // }

  render() {
    return (
      <div className="App">
        <FoodBox foods={this.state.foods} />
        <AddFood addFoodProps={this.addFoodHandler} />
        <button onClick={this.showForm}>Add food</button>
      </div>
    );
  }
}

export default App;
