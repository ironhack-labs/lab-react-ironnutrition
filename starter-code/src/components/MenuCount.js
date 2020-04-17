import React, { Component } from 'react';


class MenuCount extends Component {
  render() {
    const { totalCalories } = this.props;
    return(
      <div className="menu-count-box">
        <h2>Today's foods</h2>
        <div>
          List
        </div>
        <p>Total:{ totalCalories } cal</p>
      </div>
    )
  }
}

export default MenuCount;