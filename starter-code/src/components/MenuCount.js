import React, { Component } from 'react';


class MenuCount extends Component {
  render() {
    const { image, name, totalCalories, quantity } = this.props;
    return(
      <div className="menu-count-box">
        <h2>Today's foods</h2>
        <div>
          List
        </div>
        <div>
          <p>Image: { image }</p>
          <p>Name: { name }</p>
          <p>Total: { totalCalories } cal</p>
          <p>Quantity: { quantity }</p>
        </div>

      </div>
    )
  }
}

export default MenuCount;