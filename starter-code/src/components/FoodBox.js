// components/FoodBox.js

import React, { Component } from 'react';

class FoodBox extends Component {
  // It's probably a bad idea here to replicate state at the component level
  // since I=we could just send the quantity which is the minimum state info needed
  state = {
    name: this.props.name,
    calories: this.props.calories,
    image: this.props.image,
    quantity: this.props.quantity,
    show: this.props.show,
  }

  handleInput = (e) => {
    const newQuantity = e.target.value? parseInt(e.target.value, 10) : '';
    this.setState({
      quantity: newQuantity,
    });
  };

  handleClick = (e) => {
    if (this.state.quantity > 0)
      this.props.addTodaysFoods(this.state);
  }

  render() {
    const { name, calories, image, quantity } = this.state;
    return (
      <div className='box'>
        <article className='media'>
          <div className='media-left'>
            <figure className='image is-64x64'>
              <img alt='dish' src={image} />
            </figure>
          </div>
          <div className='media-content'>
            <div className='content'>
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className='media-right'>
            <div className='field has-addons'>
              <div className='content'>
                <input
                  className='input'
                  type='number'
                  min='0'
                  value={quantity}
                  onChange={this.handleInput}
                />
              </div>
              <div className='control'>
                <button
                  className='button is-info'
                  onClick={this.handleClick}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )  
  }
}

export default FoodBox;
