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
    filteredFoods: foods
  }

  handleAddFood = (newFood) => {
    const { foods, filteredFoods } = this.state;

    this.setState({
      foods: [...foods, newFood],
      filteredFoods: [...filteredFoods, newFood]
    });
  }

  handleSearch = (filteredFoods) => {
    this.setState({
      filteredFoods: filteredFoods
    });
    // console.log(filteredFoods)
  }

  render() {
    const { foods, filteredFoods } = this.state;

    console.log(filteredFoods);

    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <FormAddFood click={this.handleAddFood}/>
        <Search foods={foods} search={this.handleSearch}/>
        <div className='columns'>
          <div className='column'>
            {filteredFoods.map((food, index) => (
              <FoodBox key={index} food={food}/>
              // <FoodBox key={index} image={food.image} name={food.name} calories={food.calories} quantity={food.quantity} />
            ))}
          </div>
          <div className='column'>
            <TodaysFood />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
