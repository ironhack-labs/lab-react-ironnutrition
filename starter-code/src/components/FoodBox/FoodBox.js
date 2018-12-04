import React, { Component } from "react";
import './FoodBox.css'

export default class FoodBox extends Component {

    constructor(props) {
        super(props);
        this.props=props 
    }

  render() {
    return (
      <React.Fragment>
        <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.img}/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.name}</strong> <br/>
                    <small>{this.props.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input type="number" className="input" value={this.props.quantity}/>
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
      </React.Fragment>
    );
  }
}
