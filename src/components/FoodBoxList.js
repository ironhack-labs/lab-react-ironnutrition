/*
 * Food Box List.
 */

import React, { Component } from 'react';
import FoodBox from './FoodBox';

class FoodBoxList extends Component {
  render() {
    const { foods, onCalories } = this.props;

    return (
      <div>
        {foods.map((food, idx) => {
          return (
            <FoodBox key={idx} singleFood={food} onCalories={onCalories} />
          );
        })}
      </div>
    );
  }
}

export default FoodBoxList;
