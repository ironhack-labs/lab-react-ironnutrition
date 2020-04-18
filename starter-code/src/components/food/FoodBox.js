import React, { Component } from "react";
import TodaysFood from "../todaysFood/TodaysFood.js";
import "./FoodBox.css";

export default class FoodBox extends Component {
  render() {
    const { name, calories, img, quantity } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={img} alt="image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <TodaysFood name={name} quantity={quantity} />

            {/* <div className="field has-addons">
               <div className="control">
                <input
                  className="input"
                  id="quantity"
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={this.handleQuantity}
                />
              </div>

              <div className="control">
                <button
                  className="button is-info"
                  onClick={this.handleSubmitQuantity}
                >
                  +
                </button>
              </div> 
            </div>*/}
          </div>
        </article>
      </div>
    );
  }
}
