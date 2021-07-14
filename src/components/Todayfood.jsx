import React, { Component } from 'react';

class Todayfood extends Component {
  render() {
    const { totalfood } = this.props;
    let sum = totalfood.reduce((acc, food) => {
      return acc + food.quantity * food.calories;
    }, 0);
    return (
      <div>
        Today 's Food
        {totalfood.map((food) => {
          return (
            <div>
              <ul>
                <li>
                  {food.quantity}
                  {food.name} X {food.calories} calories =
                  {food.quantity * food.calories}
                </li>
              </ul>
            </div>
          );
        })}
        <h3>Total : {sum} cal</h3>
      </div>
    );
  }
}

export default Todayfood;
