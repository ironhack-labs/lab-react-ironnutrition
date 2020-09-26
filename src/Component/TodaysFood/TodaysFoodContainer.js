import React, { Component } from 'react';

export default class TodaysFoodContainer extends Component {
  render() {
    const totalCalories = this.props.todayFood.reduce(
      (acc, element) => acc + element.calories,
      0
    );
    return (
      <div>
        <h1>Today's Food</h1>
        <ul>
          {this.props.todayFood.map((element, index) => {
            return (
              <div>
                <li key={index}>
                  {element.quantity} {element.name} = {element.calories} Cal
                </li>
                <div>
                  <button
                    className="button is-danger"
                    onClick={() => this.props.handleDelete(element.name)}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
        <p> Total: {totalCalories} calories</p>
      </div>
    );
  }
}
