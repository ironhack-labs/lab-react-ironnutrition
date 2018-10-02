import React, { Component } from 'react';

class FoodBox extends Component {
  state={
    quantity: 1,
    oldQuantity: 1
  }

  handleInput = (e) => {
    this.setState({ oldQuantity: this.state.quantity })
    this.setState({ quantity: e.target.value })
  }

  handleSelectFood = (e) => {
    this.props.onSelectFood(this.props.id, this.state.quantity)
  }

  render() {
    const {id, image, name, calories, quantity} = this.props

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name}/>
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
                <input className="input" type="number" value={this.state.quantity} onChange={this.handleInput}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleSelectFood}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
