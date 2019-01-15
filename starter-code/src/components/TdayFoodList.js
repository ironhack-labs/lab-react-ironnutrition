import React, { Component } from "react";
import TdayFoodBox from "./TdayFoodBox";

export default class TdayFoodList extends Component {
  constructor() {
    super();
    this.state = {
      foodList: [],
      totalCals: 0
    };
  }

  componentDidMount() {
    this.setState({
      foodList: this.props.foodList
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      foodList: nextProps.foodList
    });
  }

  render() {
    let totalCals = this.state.foodList.reduce((a, b) => {
      return a + b["calories"];
    }, 0);
    return (
      <div className="content">
        {this.state.foodList.map((food, index) => (
          <TdayFoodBox
            key={food.name}
            food={food}
            index={index}
            onDelete={(idx)=>this.props.onDelete(idx)}
          />
        ))}
        <div className="content">
          <p>Total:{totalCals} cal</p>
        </div>
      </div>
    );
  }
}
