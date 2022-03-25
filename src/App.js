import React from 'react';
import  { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox/FoodBox';
 import NewForm from './components/NewForm/NewForm';

class App extends Component {
  state = {
    foods: [...foods],
    search: '',
    sort: '',
  };

  onAddFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4(),
    };
    this.setState({ foods: [newFood, ...this.state.foods] });
  };

  getFoodsBySearchFilter = () => {
    const { foods, search } = this.state;

    return foods.filter((food) => {
      if (food.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }

      if (food.calories.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }

      return false;
    });
  };

  render() {
    const { foods , search} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <label htmlFor="search" className="me-2">
              Search
            </label>
            <input
              id="search"
              name="search"
              type="text"
              value={search}
              onChange={this.handleOnChange}
            />
          </div>
          <NewForm onAddFood={this.onAddFood} />
          <FoodBox foods={foods} />
        </header>
      </div>
    );
  }
}

export default App;
