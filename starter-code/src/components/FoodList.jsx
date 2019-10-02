import React, { Component } from 'react'

export default class FoodList extends Component {
  render() {
    return (
      <div>
        <h2>Today's Food</h2>
        <ul>{this.props.children}</ul>
        <p>Total calories = {this.props.totalCal} cal.</p>
      </div>
    )
  }
}
