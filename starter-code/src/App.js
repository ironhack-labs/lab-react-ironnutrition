import React, { Component } from 'react';
import foods from './foods.json'
import FoodBox from './components/FoodBox.js';
import AddFood from './components/AddFood.js';
import Search from './components/Search.js';
import "bulma/css/bulma.css";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods.slice()
    };
  }

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy
    })
  }

  searchFoodHandler = (foodsSearch) => {
    const foodsCopy = [...this.state.foods];
    console.log('FoodsCopy ===>', foodsCopy);
    foodsSearch.pop(foodsSearch);
    // const filteredItems = foodsCopy.filter(item => item.includes(foodsSearch))
    this.setState({
      foods: foodsSearch
    })
  }
  
  render() {
    return (
      <div>
        <AddFood 
          addTheFood={this.addFoodHandler}
        />   
        <Search 
          searchTheFood={this.searchFoodHandler}  
        />
        <FoodBox 
          foods={this.state.foods}
        />
      </div>
    );
  }
}

export default App;
