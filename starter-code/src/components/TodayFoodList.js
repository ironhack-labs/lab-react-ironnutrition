import React, { Component } from 'react';

class TodayFoodList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Today's Foods</h2>
        <ul>
          {this.props.todayFoods.map((food, index) => {
            return <li key={index}>{food.name}</li>;
          })}
        </ul>
        <p>
          Total:{' '}
          {this.props.todayFoods.reduce(
            (accumulator, currentFood) => accumulator + currentFood.calories,
            0
          )}{' '}
          cal
        </p>
      </div>
    );
  }
}

export default TodayFoodList;
