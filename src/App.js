import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import OneFood from './components/OneFood';

class App extends Component {
  state = {
    foods: foods,
    isAddForm: false,
    todayFood: [],
    caloriesSum: 0,
  };

  showAddButton = () => {
    this.setState({
      isAddForm: !this.state.isAddForm,
    });
  };

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.unshift(theFood);
    this.setState({
      foods: foodsCopy,
      isAddForm: false,
    });
  };

  searchFoodHandler = (value) => {
    const foodsCopy = [...this.state.foods];
    const filteredArr = foodsCopy.filter((elem) => {
      return elem.name.includes(value);
    });
    this.setState({
      foods: filteredArr,
    });
  };

  addToTodayHandler = (theFood) => {
    const todayFoodsCopy = [...this.state.todayFood];
    todayFoodsCopy.push(theFood);
    console.log(todayFoodsCopy)
    this.setState({
      todayFood: todayFoodsCopy,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isAddForm ? (
          <AddFood addTheFood={this.addFoodHandler} />
        ) : (
          <button onClick={() => this.showAddButton()}>Add food</button>
        )}

        <Search searchFood={this.searchFoodHandler} />
        <div>
          <div>
            {this.state.foods &&
              this.state.foods.map((food, index) => (
                <FoodBox food={food} key={index} />
              ))}
          </div>
          <div>
            <div>
              <h2>Today's food</h2>
              <ul>
                <li>
                  <OneFood addToToday={this.addToTodayHandler} />
                </li>
              </ul>
              <p>Total: {this.state.caloriesSum} cal</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
