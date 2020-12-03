import 'bulma/css/bulma.css';
import React, { Component } from 'react';

export default class FoodBox extends Component {
  state = {
    quantity: 0,
  };

  changeHandler = (e) => {
    const { quantity, value } = e.target;
    this.setState({
      quantity: value,
    });
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.foodType.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.foodType.name}</strong> <br />
                <small>{this.props.foodType.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name={this.props.name}
                  value={this.state.quantity}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() =>
                    this.props.onAdd({
                      name: this.props.foodType.name,
                      quantity: this.state.quantity,
                      calories: this.props.foodType.calories,
                    })
                  }
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
