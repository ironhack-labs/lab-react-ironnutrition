import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import foods from "./foods.json";
class FoodBox extends Component {
  state = {
    quantity: 1
  }

  updateQuantity = (theEvent) => {
    this.setState({ [theEvent.target.id]: theEvent.target.value })
  }





  render() {
    console.log(this.props)


    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.theFoodForThisParticularFoodBox.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.theFoodForThisParticularFoodBox.name}</strong> <br />
                <small>{this.props.theFoodForThisParticularFoodBox.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  id="quantity"
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={(e) => this.updateQuantity(e)}
                />
              </div>
              <div className="control">
                <button onClick={() => this.props.whatToDoWhenIClickTheButton(this.props.theFoodForThisParticularFoodBox, this.state.quantity)}
                  className="button is-info">
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