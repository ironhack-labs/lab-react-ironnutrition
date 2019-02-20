import React, { Component } from "react";
import FoodForm from "./FoodForm.js";

import "./FoodBox.css";

class FoodBox extends Component {
  render() {
    const { name, image, calories } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              {/* FOOD IMAGE */}
              <img src={image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                {/* FOOD NAME */}
                <strong>{name}</strong> <br />
                {/* FOOD CALORIES */}
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                {/* FOOD QUANTITY */}
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                {/* BUTTON TO ADD QUANTITY */}
                <button
                  // onClick={() => this.addMeal()}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
