import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 1,
  }

  handleQuantity = (event) => {
    this.setState({ quantity: event.target.value });
  };

  handleTodayFood = (event) => {
    this.props.todayFoods(this.props.food.name, this.props.food.calories, this.state.quantity);
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt={this.props.food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" name="quantity" value={this.state.quantity} onChange={(event) => this.handleQuantity(event)} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleTodayFood}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
};

export default FoodBox;
