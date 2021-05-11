import React from 'react';
import './TodaysFoods.css';

class TodaysFoods extends React.Component {
  getTotalCalories = () => {
    let caloriesSum = 0;
    this.props.items.forEach((food) => {
      caloriesSum += food.calories * food.quantity;
    });
    return caloriesSum;
  };

  render() {
    return (
      <div>
        <h2 className="title is-3">Today's foods</h2>
        <ul>
          {this.props.items.map((food, index) => (
            <li className="food-item" key={index}>
              <span className="is-size-5">
                {food.quantity} {food.name} = {food.calories * food.quantity}{' '}
                cal{' '}
              </span>
              <button
                className="button is-danger"
                onClick={() => this.props.removeItemByIndex(index)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </li>
          ))}
        </ul>
        <p className="is-size-5">Total:{this.getTotalCalories()}cal</p>
      </div>
    );
  }
}

export default TodaysFoods;
