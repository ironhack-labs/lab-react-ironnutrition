import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import FormAddFood from './components/FormAddFood';
import Search from './components/Search';

class App extends Component {
  state = {
    foods: foods,
    filteredFoods: foods
  }

  handleAddFood = (newFood) => {
    const { foods } = this.state;

    this.setState({
      foods: [...foods, newFood]
    });
  }

  handleSearch = (filteredFoods) => {
    this.setState({
      filteredFoods: filteredFoods
    });
  }

  render() {
    const { foods, filteredFoods } = this.state;

    return (
      <div className="App">
        <FormAddFood click={this.handleAddFood}/>
        <Search foods={foods} search={this.handleSearch}/>
        {filteredFoods.map((food, index) => (
          <FoodBox key={index} food={food}/>
        ))}
      </div>
    );
  }
}

export default App;
