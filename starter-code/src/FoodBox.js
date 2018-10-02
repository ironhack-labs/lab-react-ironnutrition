import React, { Component } from "react";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      quantity: 1,
      calories: props.calories,
      image: props.image
    };
  }
  handleSubmit() {
    let { name, quantity, calories } = this.state;
    calories = calories * quantity;
    this.props.totalCal({ name, quantity, calories });
  }
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.state.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.name}</strong> <br />
                <small>{this.state.calories}</small>
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
                  onChange={e => this.setState({ quantity: e.target.value })}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={this.handleSubmit.bind(this)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
