import React, { Component } from 'react';
import Food from './Food';

export default class FoodBox extends Component {
  render() {
    let allFoods = this.props.foods;

    const updateQty = (qty, i) => {
      allFoods[i].quantity = qty;
    };

    return allFoods.map((food, i) => {
      console.log({ food });
      return (
        <div className="item">
          <Food
            food={food}
            addFood={this.props.addFood}
            updateQty={updateQty}
            id={i}
          />
        </div>
      );
    });
  }
}
