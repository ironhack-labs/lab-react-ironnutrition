import React, { Component } from 'react';

export default class FoodBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      quantity: 1
    }
  }


  handleQuantityChange = (event) => {
    this.setState({
      quantity: event.currentTarget.value
    })
  }


  render () {
    return (
      <div>
          <div className='box'>
            <article className='media'>
              <div className='media-left'>
                <figure className='image is-64x64'>
                  <img src={this.props.food.image} />
                </figure>
              </div>
              <div className='media-content'>
                <div className='content'>
                  <p>
                    <strong>{this.props.food.name}</strong> <br />
                    <small>{this.props.food.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className='media-right'>
                <div className='field has-addons'>
                  <div className='control'>
                    <input 
                      className='input' 
                      type='number' 
                      onChange={(event) => this.handleQuantityChange(event)} 
                      value={this.state.quantity}
                    />
                  </div>
                  <div className='control'>
                    <button className='button is-info'>+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
    );
  }
}
