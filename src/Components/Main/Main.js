import React, { Component } from 'react';
import './Main.css';

import FoodBox from '../FoodBox/FoodBox';
import NewFood from '../NewFood/NewFood';

export default class Main extends Component {
  state = {
    foods: this.props.foods,
  };

  handleNewFood = (food) => {};

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        {this.state.foods.map((food) => {
          return <FoodBox key={food.name} {...food} />;
        })}
        <NewFood newFood={this.handleNewFood} />
      </div>
    );
  }
}
