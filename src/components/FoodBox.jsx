import React, { Component } from 'react';

export default class FoodBox extends Component {
  render() {
    return (
      <div>
        <article className="media" style={{display: 'flex', flexDirection: "row"}}>
          <div className="media-left">
            <figure className="image is-64x64">
              <img style={{width: "50px"}} src={this.props.food.image} />
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
            <div className="field has-addons" style={{display: 'flex', flexDirection: "row"}}>
              <div className="control">
                <input className="input" type="number" value={this.props.food.quantity} />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
