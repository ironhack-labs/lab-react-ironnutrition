import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 1
  };

  handleInput = ({ target: input }) => {
    const { value } = input;

    this.setState({
      quantity: Math.max(value, 1)
    });
  };

  render() {
    const { handleInput } = this;
    const { id, name, calories, image, addToTodaysFood } = this.props;
    const { quantity } = this.state;

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
                <input className="input" type="number" value={quantity} onChange={handleInput} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => addToTodaysFood(id, quantity)}>
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
