import React, { Component } from 'react';

class TodaysFoods extends Component {
  constructor(props) {
    debugger;
    super(props);
  }

  render() {
    return (
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        {this.props.todaysFoods.map((food, index) => (
          <ul key={index.toString()}>
            <li>
              {food.quantity} {food.name} = {food.calories}
            </li>
          </ul>
        ))}

        <strong>
          Total:
          {this.props.todaysFoods.reduce(
            (sum, food) => sum + food.calories,
            0
          )}{' '}
          cal
        </strong>
      </div>
    );
  }
}

export default TodaysFoods;
