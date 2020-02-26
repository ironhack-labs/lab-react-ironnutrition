import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

class App extends Component {
  state = {
    foods : [...foods],
    foodsDisplay: [...foods]
  }
  addFood = (foodObj) => {
    const foodsCopy =  [...this.state.foods];
    foodsCopy.push(foodObj)
    this.setState( {foods: foodsCopy})

    const foodsCopy2 =  [...this.state.foodsDisplay];
    foodsCopy2.push(foodObj)
    this.setState( {foodsDisplay: foodsCopy2})

  }
  filterList = (query) => {
    let foodsCopy =  [...this.state.foods]
    foodsCopy = foodsCopy.filter(food => food.name.toLowerCase().includes(query.toLowerCase()))
    this.setState( {foodsDisplay: foodsCopy})
  }
    
  render() {
    return (
      <div className="App">
      <h1 className="Header">FoodBank</h1>
        <Search filterList={this.filterList}/>
        <AddFood addFood={this.addFood}/>
        {this.state.foodsDisplay.map((oneFood) => {
          return <FoodBox food={oneFood}/>
        })
        }
        
      </div>
    );
  }
}

export default App;
