import React, { Component } from 'react';
import TodayFoodItem from './todayFoodItem';

class TodayFoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateItems = (foods) => {
    let foodLists = [];
    foods.forEach((food) => {
      foodLists.push(
        <li>
          <TodayFoodItem food={food} removeItem={() => this.props.removeItem(food)} />
        </li>
      );
    });
    return foodLists;
  };

  render() {
    const todaysFood = this.props.todaysFood;
    const foodItems = this.generateItems(todaysFood);
    const totalCalories = todaysFood.reduce(
      (calories, food) => calories + food.quantity * food.calories,
      0
    );
    return (
      <div className="foodList">
        <h2>Today's foods</h2>
        <ul>{foodItems}</ul>
        <p>Total: {totalCalories} cal</p>
      </div>
    );
  }
}

export default TodayFoodList;
