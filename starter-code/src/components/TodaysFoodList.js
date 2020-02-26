import React, { Component } from "react";

export default class TodaysFoodList extends Component {
  render() {
    return (
      <div>
        <li>{this.props.food.quantity} {this.props.food.name} = {this.props.food.quantity * this.props.food.calories} calories.</li>
      </div>
    );
  }
}
