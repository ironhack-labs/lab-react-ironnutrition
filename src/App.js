/*
 * Main App.
 */

import React, { Component } from 'react';

// Bulma and custom CSS.
import 'bulma/css/bulma.css';
import './App.css';

// Data.
import foods from './foods.json';
import FoodBoxList from './components/FoodBoxList';

// Components.
import AddFood from './components/AddFood';

class App extends Component {
  state = {
    foodList: foods,
    searchResult: foods,
    showForm: false,
    foodDetails: [],
    totalCalories: [],
  };

  handleAdd = (event) => {
    event.preventDefault();
    const { foodList, searchResult } = this.state;
    const { name, calories, image } = event.target;

    const newFood = {
      name: name.value,
      calories: calories.value,
      image: image.value,
    };

    this.setState({
      foodList: [...foodList, newFood],
      searchResult: [...searchResult, newFood],
      showForm: false,
    });
  };

  handleForm = () => {
    this.setState({
      showForm: true,
    });
  };

  handleSearch = (event) => {
    const searchText = event.target.value;

    const { foodList } = this.state;

    const searchResult = foodList.filter((food) => {
      return food.name.toLowerCase().includes(searchText);
    });

    this.setState({
      searchResult: searchResult,
    });
  };

  handleCalories = (foodInfo, quantity) => {
    const { totalCalories, foodDetails } = this.state;

    const foodsInfo = {
      name: foodInfo.name,
      quantity: Number(quantity),
      calories: foodInfo.calories * quantity,
    };

    for (let idx in foodDetails) {
      if (foodDetails[idx].name === foodsInfo.name) {
        foodDetails[idx].quantity += Number(quantity);

        Number(foodDetails[idx].quantity);

        return this.setState({
          foodDetails: [...this.state.foodDetails],
        });
      }
    }

    this.setState({
      foodDetails: [...foodDetails, foodsInfo],
      totalCalories: [...totalCalories, foodsInfo.calories],
    });
  };

  render() {
    const { showForm, searchResult, totalCalories, foodDetails } = this.state;

    return (
      <div className="App">
        <div className="myTopSection">
          <h1>IronNutrition</h1>

          {/* Add new item. */}
          {showForm ? (
            <AddFood onAdd={this.handleAdd} />
          ) : (
            <button className="button is-primary" onClick={this.handleForm}>
              Show
            </button>
          )}

          {/* Search bar. */}
          <input
            className="input"
            onChange={this.handleSearch}
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="myMainContent">
          {/* List of foods. */}
          <div className="myFoods">
            <FoodBoxList
              foods={searchResult}
              onCalories={this.handleCalories}
            />
          </div>

          {/* Today's foods. */}
          <div className="myfoodDetailss">
            <h2>Today's foods</h2>
            <p>
              Total:
              {totalCalories.reduce((acc, crv) => {
                return acc + crv;
              }, 0)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
