import React from 'react';
import { Component } from 'react';

import 'bulma/css/bulma.css';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }
  handleChangeQuantity = (event) => {
    console.log('Event', event);
    this.setState({
      quantity: event.target.value,
    });
  };
  handleClick = () => {
    const { name, calories } = this.props.food;
    const { quantity } = this.state;
    const totalCalories = quantity * calories;

    if (quantity !== 0) {
      this.props.addTodaysFood({
        name,
        calories,
        quantity,
        totalCalories,
      });
    }
  };
  render() {
    const { name, calories, image } = this.props.food; //food it s the vaue i have assigned in app.js to item(of the map)

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="foodimage" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} </small>
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
                  onChange={this.handleChangeQuantity}
                />
              </div>
              <div className="control">
                <button onClick={this.handleClick} className="button is-info">
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
