import React, { Component } from 'react';
import FoodBox from '../FoodBox/FoodBox';
import foods from '../../foods.json';
import Form from '../Form/Form';
import TodaysFood from '../TodaysFood/TodaysFood';

export default class FoodList extends Component {
  state = {
    foodList: foods,
    display: false,
    search: '',
    todaysFoods: [],
  };

  displayFoods = () => {
    const foodsFiltred = this.state.foodList.filter((food) =>
      food.name.includes(this.state.search)
    );
    return foodsFiltred.map((food) => {
      return (
        <FoodBox key={food.name} {...food} addFoodToday={this.addFoodToday} eliminateFood={this.eliminateFood}/>
      );
    });
  };
  addFood = (food) => {
    const foodCopy = [...this.state.foodList];
    foodCopy.push(food);
    this.setState({ foodList: foodCopy });
  };

  eliminateFood = (name) => {
    this.setState({ foodList: this.state.foodList.filter( food => food.name !== name) })
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };
  addFoodToday = (name, calories, count) => {
    const copyTodaysFood = [...this.state.todaysFoods];
    const index = copyTodaysFood.findIndex((el) => el.name === name);
    if (index === -1) {
      copyTodaysFood.push({ name, calories, count });
    } else {
      const duplicatedFood = { ...copyTodaysFood[index], count: copyTodaysFood[index].count + 1 }
      copyTodaysFood[index] = duplicatedFood;
    }
    copyTodaysFood.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({ todaysFoods: copyTodaysFood });
  };

  render() {
    const { todaysFoods } = this.state;
    return (
      <div className="container">
     <h1 className="title">IronNutrition</h1>
     <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          onChange={(e) => this.handleSearch(e)}
        />
        <button
          className="button is-info"
          onClick={() => this.setState({ display: !this.state.display })}
        >
          Add food
        </button>
        {this.state.display && <Form addFood={(food) => this.addFood(food)} />}

        <div className="columns">
          <div className="column">{this.displayFoods()}</div>
          <div className="column">
            {' '}
            <TodaysFood todaysFoods={todaysFoods} />{' '}
          </div>
        </div>
      </div>
    );
  }
}
