import React,  { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import CreateFoodAction from './Components/CreateFoodActions/CreateFoodActions';
import SearchActions from './Components/SearchActions/SearchActions';

import './App.css';


class App extends Component {
  state = {
    allFoods: foods,
    foods,
  }

  displayFoods = () => {
    return this.state.foods.map(food => <FoodBox key={`${food.name}-list`} food={food} />)
  }

  addFood = newFood => {
    this.setState( { foods: [...this.state.foods, newFood ], allFoods: [...this.state.allFoods, newFood]  } );
  }

  filterFoods = foodName => {
    const filteredFoods = this.state.allFoods.filter(food => food.name.toLowerCase().includes(foodName.toLowerCase()));
    this.setState( { foods: filteredFoods})
  }

  render() {

    return (
      <div>
        <h1>IronNutrition</h1>
        <CreateFoodAction addFood={this.addFood} />
        <SearchActions filterFoods={this.filterFoods}/>
        {this.displayFoods()}
      </div>
    );
  }
}

export default App;
