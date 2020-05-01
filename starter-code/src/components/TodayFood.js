import React, { Component } from "react";

export default class TodayFood extends Component {
  render() {
    let totalCalories = 0;
    this.props.todayFood.forEach((food) => {
      totalCalories += food.quantity * food.calories;
    });

    const showCalories = this.props.todayFood.length ? (
      <strong>Total: {totalCalories} cal</strong>
    ) : (
      <p>Select food from the list</p>
    );

    return (
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
          {this.props.todayFood.map((food, index) => (
            <li key={index}>
              <div>
                <p>
                  {food.quantity} {food.name} = {food.quantity * food.calories} cal
                </p>
                <button onClick={() => this.props.deleteFromTodaysFood(food.name)}><i className="fa fa-trash"></i></button>
              </div>
            </li>
          ))}
        </ul>
        {showCalories}
      </div>
    );
  }
}
