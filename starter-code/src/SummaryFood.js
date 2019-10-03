import React, { Component } from "react";

export default class SummaryFood extends Component {
  render() {
    return (
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>{this.props.children}</ul>
        <strong>Total: {this.props.totalCalories} cal</strong>
      </div>
    );
  }
}
