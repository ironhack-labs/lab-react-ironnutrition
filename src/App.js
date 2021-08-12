import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsData from './foods.json';
import { Component } from 'react';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';
import Search from './Components/Search';
import TodayFoods from './Components/TodayFoods';

class App extends Component {
  state = {
    foods: foodsData,
    filter: '',
    todayFoods: [],
  };

  addNewFood = (newFood) => {
    const foodsTemp = [newFood, ...this.state.foods];
    this.setState({
      foods: foodsTemp,
    });
  };

  filterFoods = (event) => {
    //console.log(event.target.value);
    this.setState({
      filter: event.target.value,
    });
  };

  addTodayFoods = (foodToAdd) => {
    // ?? nothing logged out
    console.log(foodToAdd);

    let todayFoodsTemp = this.state.todayFoods;

    let filter = todayFoodsTemp.some((food) => {
      return food.name === foodToAdd.name;
    });

    let index = todayFoodsTemp.findIndex((food) => {
      return food.name === foodToAdd.name;
    });

    if (filter) {
      todayFoodsTemp[index].quantityToAdd =
        todayFoodsTemp[index].quantityToAdd + foodToAdd.quantityToAdd;
    } else {
      todayFoodsTemp.push(foodToAdd);
    }

    this.setState({
      todayFoods: todayFoodsTemp,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="appLeft">
          <Search filterFoodFn={this.filterFoods} />
          <FoodForm addNewFoodFn={this.addNewFood} />
          <div className="FoodListWrapper">
            {/* update state foods, filter, loop over each food to render */}
            {this.state.foods
              .filter((filteredFood) => {
                return (
                  filteredFood.name
                    .toLocaleLowerCase()
                    .includes(this.state.filter.toLocaleLowerCase()) &&
                  filteredFood
                );
              })
              .map((food) => {
                return (
                  <div key={food.name} className="App">
                    <FoodBox addTodayFoodFn={this.addTodayFoods} food={food} />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="appRight">
          <TodayFoods foodsToday={this.state.todayFoods} />
        </div>
      </div>
    );
  }
}

export default App;
