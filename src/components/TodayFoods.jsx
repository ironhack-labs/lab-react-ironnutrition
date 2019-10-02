import React, { Component } from "react";
import Information from "./Information";

class TodayFoods extends Component {
  render() {
    return (
      <div className="column content">
        <h2 className="subtitle">Today's Foods</h2>
        <Information something={this.props.something}/>
      </div>
    );
  }
}

export default TodayFoods;