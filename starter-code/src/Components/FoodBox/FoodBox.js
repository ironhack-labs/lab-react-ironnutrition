
import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import "bulma/css/bulma.css";
import Foods from "../../foods.json";


class FoodsJson extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div className="Food">
        <div className="box">
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
                  <small> {this.props.food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={this.props.quantity} />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
     
      </div>
    );
  }
}

export default FoodsJson;


