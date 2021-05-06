import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './comps/FoodBox';
import Searcher from './comps/Searcher';
import TodayFood from './comps/TodayFood';

class App extends React.Component {
  state = {
    foods: foods,
    copyOfFood: foods,
    todayFoods: [],
  };

  filterFood(event) {
    const value = event.target.value.toLowerCase();
    const filteredFood = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(value);
    });
    this.setState({ ...this.state, copyOfFood: filteredFood });
  }

  todayFoodsFunc = (quantity, food) => {
    const newObject = {
      name: food.name,
      calories: food.calories,
      quantity: quantity,
    };

    this.setState({
      todayFoods: [...this.state.todayFoods, newObject],
    });
  };

  render() {
    const foodList = this.state.copyOfFood.map((food, index) => {
      return (
        <FoodBox food={food} key={index} todayFunc={this.todayFoodsFunc} />
      );
    });
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Searcher filterFunc={(event) => this.filterFood(event)} />
        <div className="food-list-results">
          <div>{foodList}</div>

          <h3>Today's food</h3>
          <TodayFood todayFood={this.state.todayFoods} />
        </div>
      </div>
    );
  }
}

export default App;
