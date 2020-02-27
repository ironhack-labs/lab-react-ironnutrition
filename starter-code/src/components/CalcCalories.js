import React, { Component } from 'react'

export default class CalcCalories extends Component {
  render() {
    return (
      <div>
        <h1>Today's foods</h1>
        <ul>
          {this.props.foodList.map((food) => {
            return <li>{food.quantity} {food.name} = {food.totalCal} cal</li>
          })}
        </ul>

        {this.props.totalCalc && <p>Total: {this.props.totalCalc} cal</p>}
        {!this.props.totalCalc && <p>Total: 0 cal</p>}
      </div>
    )
  }
}
