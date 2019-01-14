import React, { Component } from "react";

import TdayFoodList from "./TdayFoodList";


export default class TdayFood extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="column">
        <div className="section">
          <h1 className="title">Todays Food</h1>
          <TdayFoodList foodList={this.props.foodList}/>
        </div>
      </div>
    );
  }
}
