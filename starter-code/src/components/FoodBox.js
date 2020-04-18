import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {
  state = {
    quantity: 1,
  }

  handleTodayFood = () => {
    const { click, name, calories } = this.props;
    const {quantity}= this.state;
    click(name, calories, quantity)
  }

  handleQuantity = (e) => {
    this.setState({
      quantity: e.currentTarget.value
    })
  }

  render() {
    const { image, name, calories } = this.props;
    const { quantity } = this.state
    return(
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} />
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
              <input onChange={this.handleQuantity}
                className="input"
                type="number"
                value={quantity}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={this.handleTodayFood}>
                +
        </button>
            </div>
          </div>
        </div>
      </article>
    </div>)
  }
}

export default FoodBox;