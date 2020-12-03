import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/foodBox';
//import NewFood from './component/newfood/NewFood';
//import Search from './component/search/Search';
//import TodaysFood from './component/todaysfood/TodaysFood';
import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    foods: foods,
    formNewFood: false,
    filterdFoods: '',
    totalCal: 0,
    todaysFoods: [],
  };

  showFormAddFood = () => {
    this.setState({
      formNewFood: true,
    });
  };

  addNewFood = (newFood) => {
    this.setState({
      foods: [newFood, ...this.state.foods],
      formNewFood: false,
    });
  };

  filterFoods = (searchInput) => {
    let searchTerm = searchInput.search;
    const foodArrCopy = this.state.foods;

    let filteredArr = foodArrCopy.filter((food) =>
      food.name.toLowerCase().startsWith(searchTerm)
    );

    this.setState({
      filterdFoods: filteredArr,
    });
  };

  addTodaysFoodHandler = (item, quantity) => {
    console.log(item);
    this.setState({
      todaysFoods: [item, ...this.state.todaysFoods],
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <button
          className="button is-primary"
          onClick={(e) => this.showFormAddFood(e)}
        >
          Add new food
        </button>
        {this.state.formNewFood && <NewFood addNewFood={this.addNewFood} />}

        <Search searchTerm={this.filterFoods} />

        <div className="columns">
          <div className="column">
            {this.state.filterdFoods !== ''
              ? this.state.filterdFoods.map((food, index) => (
                  <FoodBox
                    key={index}
                    foodType={food}
                    onAdd={this.addTodaysFoodHandler}
                  />
                ))
              : this.state.foods.map((food, index) => (
                  <FoodBox
                    key={index}
                    foodType={food}
                    onAdd={this.addTodaysFoodHandler}
                  />
                ))}
          </div>
          <div className="column">
            <h2>Today's foods</h2>
            {this.state.todaysFoods.map((food, index) => (
              <TodaysFood key={index} food={food} />
            ))}
            <h3>Total:</h3>
            {this.state.todaysFoods.reduce((a, c) => {
              return a + c.calories * Number(c.quantity);
            }, 0)}
          </div>
        </div>
      </div>
    );
  }
}
