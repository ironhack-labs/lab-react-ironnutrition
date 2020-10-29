/*
 * Food Box.
 */

import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 0,
  };

  changeHandler = (event) => {
    this.setState({
      quantity: event.target.value,
    });
  };

  render() {
    const { singleFood, onCalories } = this.props;
    const { quantity } = this.state;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={singleFood.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{singleFood.name}</strong> <br />
                <small>{singleFood.calories}</small>
              </p>
            </div>
          </div>

          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.changeHandler}
                  className="input"
                  type="number"
                  placeholder="1"
                />
              </div>

              <div className="control">
                <button
                  onClick={() => {
                    onCalories(singleFood, quantity);
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

export default FoodBox;
