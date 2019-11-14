import React, { Component } from 'react'

export default class SingleBullet extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>• {this.props.foodQuantity} {this.props.foodName} = {this.props.foodCalories*this.props.foodQuantity} cal</li>
        </ul>
      </div>
    )
  }
}
