import React, { Component } from "react";
import ShowFood from "./ShowFood.js";
import "./TodaysFood.css";

export default class TodaysFood extends Component {
  state = {
    name: "",
    quantity: 0,
  };

  handleQuantity = (el) => {
    this.setState({
      quantity: el.target.value,
      name: this.props.name,
    });
  };

  render() {
    const { quantity } = this.props;

    return (
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            id="quantity"
            type="number"
            name="quantity"
            value={quantity}
            onChange={this.handleQuantity}
          />
        </div>

        <ShowFood name={this.state.name} quantity={this.state.quantity} />
      </div>
    );
  }
}
