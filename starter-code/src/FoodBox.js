import React, { Component } from "react";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      image: this.props.image,
      quantity: this.props.quantity,
      calories: this.props.calories
    };
  }
  render() {
    const { name, image, quantity, calories } = this.state;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name} />
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
                  onChange={e => this.setState({ quantity: e.target.value })}
                  className="input"
                  type="number"
                  value={quantity}
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    this.setState({ quantity: 1 });
                    this.props.onAddList({ name, image, quantity, calories });
                  }}
                  className="button is-info"
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
