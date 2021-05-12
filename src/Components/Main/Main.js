import React from 'react';
import './Main.css';

import FoodBox from '../FoodBox/FoodBox';
import NewFood from '../NewFood/NewFood';

import foods from '../../foods.json';

export default class Main extends React.Component {
  state = {
    allFoods: foods,
  };

  handleNewFood = (food) => {};

  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        {this.state.allFoods.map((food) => {
          return <FoodBox key={food.name} {...food} />;
        })}
        {/* <NewFood newFood={this.handleNewFood} /> */}
      </div>
    );
  }
}
