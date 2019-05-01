import React, { Component } from 'react';

import '../App.css';

export default class Foodbox extends Component {
    constructor() {
        super();
        this.state = {

            };
      }
      collect(e){

        e.preventDefault();

            this.props.new()
    
      }
  render() {
    return (
      <div className="has-margin-3">
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
            value={this.props.quantity}
          />
        </div>
        <div className="control">
          <button className="button is-info" onClick={(e) => this.collect(e)}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
      </div>
    )
  }
}
