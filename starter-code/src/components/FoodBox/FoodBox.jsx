import React, { Component } from 'react'
import './FoodBox.css'
import 'bulma/css/bulma.css';

class FoodBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    let food = {
      name: this.props.name,
      image: this.props.image,
      calories: this.props.calories,
      quantity: this.props.quantity
    }

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
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
                  // value={this.props.quantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.props.onClick}>
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