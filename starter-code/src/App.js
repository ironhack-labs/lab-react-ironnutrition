import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends Component {
  state = {
    foods : [...foods]
  }
  addFood = (foodObj) => {
    const foodsCopy =  [...this.state.foods];
    foodsCopy.push(foodObj)
    this.setState( {foods: foodsCopy})
  }
  render() {
    return (
      <div className="App">
        <AddFood addFood={this.addFood}/>
        {this.state.foods.map((oneFood) => {
          return <FoodBox food={oneFood}/>
        })
        }
        
      </div>
    );
  }
}

export default App;
