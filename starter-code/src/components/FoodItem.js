import React, { Component } from 'react';


class FoodItem extends Component{
  render(){
    return (
      <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={this.props.food.image} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{this.props.food.name}</strong> <br />
            <small>{this.props.food.calories}</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number" 
              value={this.props.food.quantity}
            />
          </div>
          <div className="control">
            <button className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
    )
  }

}
export default FoodItem;