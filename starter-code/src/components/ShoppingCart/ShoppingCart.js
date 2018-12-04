import React, { Component } from "react";
import { StyledList } from "./ShoppingCart.styled";

export default class ShoppingCart extends Component {

    totalCalories = () => this.props.myCart.reduce((acc, elem) => acc += elem.calories, 0)

  render() {
    return (
      <React.Fragment>
        <StyledList>
          {this.props.myCart.map((elem, i) => (
            <li key={i}>
              {elem.quantity} {elem.name} = {elem.calories} calories
            </li>
          ))}
            <p>Today's Foods</p>
            <p>Total: {this.totalCalories()} calories</p>          
        </StyledList>
      </React.Fragment>
    );
  }
}
