import React, { Component } from 'react'
import './FoodList.css'

export default class FoodList extends Component {
  render() {
    return (
      <div className='foodListCard'>
        <h2>Today's Food</h2>
        <ul>{this.props.children}</ul>
        <p>Total calories = {this.props.totalCal} cal.</p>
      </div>
    )
  }
}
