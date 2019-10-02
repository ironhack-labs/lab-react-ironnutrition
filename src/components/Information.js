import React, { Component } from "react";

class Information extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>1 Pizza = 400 cal</li>
          <li>2 Salad = 300 cal</li>
        </ul>
        {this.props.something}
        <strong>Total: 700 cal</strong>
      </React.Fragment>
    );
  }
}

export default Information;
