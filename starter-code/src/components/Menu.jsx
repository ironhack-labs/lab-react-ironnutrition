import React, { Component } from "react";

class Menu extends Component {
  state = {
    quentity: 1,
    actualItem: "",
  };

  printMenu = () => {
    return this.props.yourMenu.map((food, index) => (
      <li key={index}>
        {food.name} {food.quantity}
      </li>
    ));
  };

  printCalories = () => {
    return this.props.yourMenu.reduce(
      (a, b) => (a += b.calories * b.quantity),
      0,
    );
  };

  deleteItem = e => {
    this.setState(
      {
        actualItem: e.currentTarget.dataset.item,
      },
      () => this.props.deleteFood(this.state.actualItem),
    );
  };

  render() {
    return (
      <div>
        <h1>Today's Food</h1>
        <ul>{this.printMenu()}</ul>
        <h3>Total Calories : {this.printCalories()}</h3>
      </div>
    );
  }
}

export default Menu;
