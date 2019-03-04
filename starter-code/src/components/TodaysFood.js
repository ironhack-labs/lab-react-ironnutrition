import React, { Component } from "react";

class TodaysFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCalories: ""
    };
  }

  render() {
    const { name, calories, quantity } = this.props;
    this.state.totalCalories = calories * quantity;
    return (
      <div className="TodaysFood">
        <h2>Today's Food</h2>
        <ul>
          <li>
            {quantity} {name} : {this.state.totalCalories} cal
          </li>
        </ul>
      </div>
    );
  }
}

export default TodaysFood;
