import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

import FoodBox from "./components/FoodBox/FoodBox";
import CreateFoodActions from './components/CreateFoodActions/CreateFoodActions';
import SearchActions from './components/SearchActions/SearchActions';

class App extends Component {
  state = {
    allFoods: foods,
    foods,
  }

   displayFoods = () => {
    return this.state.foods.map (food => <FoodBox food={food} />)
  }

  addFood = newFood => {
    this.setState({ foods: [...this.state.foods, newFood]})
  }

  filterFoods = foodName => {
    const filteredFoods = this.state.allFoods.filter(food => foodName.toLowerCase().includes(foodName.toLowerCase()));
  }

  render() {
    
    return (
      <div>
      <h1>Iron Nutrition</h1>

      <CreateFoodActions  addFood ={this.addFood} />
      
      <SearchActions filterFoods={this.filterFoods} />

      <section> 

      <FoodBox food={foods[0]} /> 
  
      {this.displayFoods()}
      </section>
      </div>
    );
  };
}

export default App;
