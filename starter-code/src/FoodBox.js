import React, { Component } from "react";
import "bulma/css/bulma.css";

class FoodBox extends Component {
  state = {
    quantity: 0
  };

  updateForm(e, field) {
    this.setState({
      [field]: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.addFoodToList(this.state);
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  min="0"
                  value={this.state.quantity}
                  onChange={e => this.updateForm(e, "quantity")}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={e => this._handleSubmit(e)}
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

export default FoodBox;
