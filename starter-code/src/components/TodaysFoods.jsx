import React, { Component } from "react";

export default class TodaysFoods extends Component {
  render() {
    return (
      <li>
        {this.props.v.quantity} {this.props.v.name} ={this.props.v.calories}
        cal
      </li>
    );
  }
}
