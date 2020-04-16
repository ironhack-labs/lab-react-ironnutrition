// components/FoodBox.js

import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: this.props.quantity,
  }

  handleInput = (e) => {
    console.log(`Input ${e.target.name} value ${e.target.value}`);
    this.setState({
      quantity: e.target.value,
    });
  };

  render() {
    const { name, calories, image } = this.props;
    const { quantity } = this.state;
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
                <button className='button is-info'>
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
