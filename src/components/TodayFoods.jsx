import React, { Component } from 'react';

class TodayFoods extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.foodList.quantity} {this.props.foodList.name}.
        </p>
        <p>
          {this.props.foodList.calories * this.props.foodList.quantity}{' '}
          calories.
        </p>
      </div>
    );
  }
}

export default TodayFoods;
