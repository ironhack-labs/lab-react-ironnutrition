// components/TodaysFoods.js

import React, { Component } from 'react';

class TodaysFoods extends Component {
  handleRemove = (e) => {
    this.props.removeTodaysFoods(e.target.value);
  };

  totalCalories = () => {
    const { todaysFoods } = this.props;
    if (todaysFoods.length > 0) {
      return todaysFoods.reduce((accumulator, current) => accumulator + current.quantity * current.calories, 0);
    } else {
      return 0;
    }
  }

  render() {
    const { todaysFoods } = this.props;
    return (
      <div>
        <h3 className='subtitle is-3'>Today's foods</h3>
        <div className='content'>
          <ul>
            {todaysFoods.map((food, index) => {
            const { name, calories, quantity } = food;
            return (
              <li key={index + name + quantity}>
                <div className='level'>
                  <span>{quantity} {name} = {quantity * calories} calories</span>
                  <button onClick={this.handleRemove} value={name} className='button is-small outlined'>Remove</button>
                </div>
              </li>
            );
          })}
          </ul>
          <span>Total: {this.totalCalories()} cal</span>
        </div>
      </div>
    );
  }
}

export default TodaysFoods;
