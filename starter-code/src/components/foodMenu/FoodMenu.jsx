import React, { Component } from 'react'

export default class FoodMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <li>{this.props.quantity} {this.props.name} * {this.props.calories*this.props.quantity}</li>
      </React.Fragment>
    )
  }
}
