import React, { Component } from 'react';
import FoodItem from './FoodItem';
import TodaysFood from './TodaysFood';

import './styles/FoodBox.css';

export default class FoodBox extends Component {
  render() {
    const { foods, onTodaysFood, onDelete, today, calories } = this.props;

    return (
      <div className="foodBox__container">
        <div className="foodBox__items">
          {foods.map((food, index) => {
            return (
              <FoodItem food={food} key={index} onTodaysFood={onTodaysFood} />
            );
          })}
        </div>

        <div className="foodBox__todaysFood">
          <h4 className="title is-4">Today's Food</h4>
          {today.map((foodInfo, index) => {
            return (
              <TodaysFood foodInfo={foodInfo} key={index} onDelete={onDelete} />
            );
          })}
          <p>
            <i>Total {calories} cal</i>{' '}
          </p>
        </div>
      </div>
    );
  }
}
