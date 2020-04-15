import React, { Component } from 'react'
import 'bulma/css/bulma.css';

export default class FoodBox extends Component {
  constructor(){
    super()
    this.state = { quantity: 0 }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleAddItemQuantity = () => {
    this.props.addItemQuantity(this.props.name, this.state.quantity)
  }

  render() {
    const { name, calories, image, quantity} = this.props
    return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={ image } alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{ name }</strong> <br />
              <small>{ calories }</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number" 
                name="quantity"
                min="0"
                defaultValue={quantity}
                onChange={this.handleInput}
              />
            </div>
            <div className="control">
              <button onClick={this.handleAddItemQuantity} className="button is-info">
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
