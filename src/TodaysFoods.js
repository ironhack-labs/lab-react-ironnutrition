import React from 'react';

class TodaysFoods extends React.Component {
  render() {
    const caloriesArray = this.props.addFood.map((food) => {
      return food.calories * food.quantity;
    });

    const sumOfCalories = caloriesArray.reduce((acc, a) => {
      return acc + a;
    }, 0);
    const foodArr = this.props.addFood.map((item, index) => {
      return (
        <li key={index}>
          {item.quantity} {item.name}= {item.quantity * item.calories}cal
        </li>
      );
    });
    return (
      <div className="TodaysFoods">
        <h1>
          <strong>Today's Foods</strong>
        </h1>
        <ul>{foodArr}</ul>
        <p>Total: {sumOfCalories} cal</p>
      </div>
    );
  }
}

export default TodaysFoods;
