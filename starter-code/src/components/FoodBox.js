import React, { Component } from "react";

import "./FoodBox.css";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.image,
      quantity: this.props.quantity
    };
  }

  updateQty(event) {
    this.setState({ quantity: parseInt(event.target.value, 10) });
  }

  handlePlusButton(event) {
    event.preventDefault();
    const totalCalories = this.state.quantity * this.state.calories;
    this.props.addToSelection({
      name: this.state.name,
      calories: this.state.calories,
      quantity: this.state.quantity,
      totalCalories: totalCalories
    });
  }

  render() {
    const { name, calories, image, quantity } = this.state;
    return (
      <div className="FoodBox">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={image} alt="default-img" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{name}</strong> <br />
                  <small>{calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={quantity}
                    onChange={event => this.updateQty(event)}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={event => this.handlePlusButton(event)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default FoodBox;
