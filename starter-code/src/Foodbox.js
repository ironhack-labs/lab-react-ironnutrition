import React, { Component } from "react";
import logo from "./logo.svg";
import foods from "./foods.json";

export class Foodbox extends Component {
  constructor() {
    super();
    this.state = {
      enableFoods: true,
      foods: [],
    };
  }

  render() {
    return (
      <div className="box">
        {foods.map((e,i) => {
          return (
       <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={e.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{e.name}</strong> <br />
                <small>{e.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={e.quantity} />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
        )
      })
        }
      </div>
    );
  }
}
