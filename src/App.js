import './App.css';
import foods from "./foods.json";
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';

import React, { Component } from 'react';
import Search from './components/Search';

class App extends Component {
  state = {
    foods: foods,
    search: ''
  }

  handleSearch = (filter) => {
    this.setState(prevState => ({
      search: filter,
      foods: prevState.foods.filter(food => food.name.includes(this.state.search))
    }))
  }

  onSubmitFood = (food) => {
    const newFood = {...food}
    const newList = () => {
      this.state.foods[this.state.foods.length] = newFood
      return this.state.foods
    }
    this.setState({foods: newList()})
  }

  render() {
    return (
      <div className="App">
        <Search handleSearch={this.handleSearch} search={this.state.search} />
        <AddFoodForm onSubmitFood={this.onSubmitFood} />
        <FoodList foods={this.state.foods} />
      </div>
    );
  }
}

export default App;
