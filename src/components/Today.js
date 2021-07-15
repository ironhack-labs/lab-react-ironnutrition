import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Today extends Component {
  render() {
    const { totalFood } = this.props;
    let total = totalFood.reduce((acc, food) => {
      return acc + food.calories * food.quantity;
    }, 0);
    return (
      <div>
        <h1>Today's Foods</h1>
        {totalFood.map((food) => {
          return (
            <div>
              <ul>
                <li>
                  {food.quantity} {food.name} = {food.calories} calories
                </li>
              </ul>
            </div>
          );
        })}
        <p>Total: {total} calories</p>
      </div>
    );
  }
}

export default Today;
