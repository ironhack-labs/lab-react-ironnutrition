import React, { Component } from "react";

class Information extends Component {
  selectedMeals = () => {
    let mappedMeals = this.props.something.pickedFoods.map((each, i) => {
      let total = Number(each.quantity) * Number(each.calories);
      let orders = "order";
      if (each.quantity > 1) {
        orders = "orders";
      }
      return (
        <li key={i}>
          {each.quantity} {orders} of {each.name} = {total} calories
        </li>
      );
    });
    return mappedMeals;
  };

  render() {
    return (
      <React.Fragment>
        <ul>{this.selectedMeals()}</ul>
        {<strong>Total: {this.props.something.caloricTotal} cal</strong>}
      </React.Fragment>
    );
  }
}

export default Information;
