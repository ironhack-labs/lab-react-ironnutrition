import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import FormAddFood from './components/FormAddFood';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    foods: foods,
    filterFoodsBy: ''
  }

  handleAddFood = (newFood) => {
    const { foods } = this.state;

    this.setState({
      foods: [...foods, newFood],
    });
  }

  handleSearch = (textToFilter) => {
    this.setState({
      filterFoodsBy: textToFilter
    });
  }

  addFoodToTodayList = (name, quantity) => {
    this.state.foods.forEach(food => {
      if(food.name === name) {
        food.quantity += parseInt(quantity, 10);
      }
    });

    this.setState({
      foods: [...this.state.foods]
    })
  }

  deleteFoodFromTodayList = (name) => {
    this.state.foods.forEach(food => {
      if(food.name === name) {
        food.quantity = 0;
      }

      this.setState({
        foods: [...this.state.foods]
      })
    })
  }

  render() {
    const { foods, filterFoodsBy } = this.state;
    const filteredFoods = foods.filter(food => (food.name.toLowerCase()).indexOf(filterFoodsBy.toLowerCase()) >= 0);

    return (
      <div className='App'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <h1 className='App-h1'>IronNutrition</h1>
        <FormAddFood click={this.handleAddFood}/>
        <Search setFilterFoods={this.handleSearch}/>
        <div className='columns'>
          <div className='column'>
            {filteredFoods.map((food, index) => ( 
              <FoodBox key={index} food={food} addFoodToTodayList={this.addFoodToTodayList}/>
            ))}
          </div>
          <div className='column'>
            <TodaysFood foods={foods} deleteFoodFromTodayList={this.deleteFoodFromTodayList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
