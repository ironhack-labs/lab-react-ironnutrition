import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBox from "./components/FoodBox/FoodBox";
import CreateFoodActions from './components/CreateFoodActions/CreateFoodActions';
import SearchActions from './components/SearchActions/SearchActions';

class App extends Component {
  state = {
    foods,
  }

   displayFoods = () => {
    return this.state.foods.map (food => <FoodBox food={food} />)
  }

  addFood = newFood => {
    this.setState({ foods: [...this.state.foods, newFood]})
  }

  render() {
    
    return (
      <div>
      <h1>Iron Nutrition</h1>
      <CreateFoodActions  addFood ={this.addFood} />
      
      <SearchActions />

      <FoodBox food={foods[0]} /> 
  
      {this.displayFoods()}
      </div>
    );
  };
}

export default App;
