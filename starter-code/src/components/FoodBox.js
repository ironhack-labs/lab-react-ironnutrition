import React, { Component } from "react";

export default class FoodBox extends Component {
  state = {
    quantity: 0,
    img: ""
  };

  quantity() {
    const q = this.state.quantity + 1;
    this.setState({ quantity: q });
  }
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="lol" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <p>{this.state.quantity}</p>
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => this.quantity()}
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
