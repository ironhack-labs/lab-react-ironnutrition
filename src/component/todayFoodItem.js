import React, { Component } from 'react';

class TodayFoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const quantity = this.props.food.quantity;
    const name = this.props.food.name;
    const calories = this.props.food.calories;
    return (
      <>
        {quantity} {name} = {calories * quantity}
        <button type="button" onClick={() => this.props.removeItem()}>
          x
        </button>
      </>
    );
  }
}

export default TodayFoodItem;
