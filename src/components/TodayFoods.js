import React, { Component } from "react";
import Information from "./Information";

class TodayFoods extends Component {
  render() {
    return (
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <Information something={this.props.something} food={this.props.theFood} amount={this.props.theAmount}/>
      </div>
    );
  }
}

export default TodayFoods;
