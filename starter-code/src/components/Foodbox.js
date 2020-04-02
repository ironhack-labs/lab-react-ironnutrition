import React, { Component } from 'react';
import Todays from './Todays';

class Foodbox extends Component {
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p className="food">
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
                  value={this.props.quantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={()=>{this.props.addFood(this.props.index)}}>+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}


export default Foodbox;