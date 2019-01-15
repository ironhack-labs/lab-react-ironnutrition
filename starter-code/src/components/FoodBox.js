import React, { Component } from "react";

export default class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
      message: false
    };
  }

  handleQuantity(e) {
    this.setState({ quantity: e.target.value });
  }

  addItemToday() {
    if (this.state.quantity < 1) {
      this.setState({ message: !this.state.message });
    } else {
      let todayFood = {
        name: this.props.food.name,
        calories: this.props.food.calories * this.state.quantity,
        quantity: this.state.quantity
      };
      this.props.addItemToday(todayFood);

      this.setState({ quantity: 0 });
      this.setState({ message: false });
    }
  }

  render() {
    let { food,index } = this.props;
    return (
      <div className="content">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt={food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={this.state.quantity}
                    min="0"
                    max="10"
                    onChange={e => this.handleQuantity(e)}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => this.addItemToday()}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div>
          {this.state.message ? (
            <div className="notification is-danger">
              For adding quantity must be more than 0
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
