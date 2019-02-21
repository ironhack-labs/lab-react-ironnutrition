import React, { Component } from "react";

import "bulma/css/bulma.css";
import "./FoodBox.css";

class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      image: this.props.image,
      calories: this.props.calories,
      quantity: this.props.quantity
    };
  }

  render() {
    const { name, image, calories, quantity } = this.state;
    return (
      <section className="food">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={image} />
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
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={quantity} />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default FoodBox;
