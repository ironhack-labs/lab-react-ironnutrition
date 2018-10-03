import React, { Component } from "react";
import food from "../foods.json"

export class Foodbox extends Component {
  constructor() {
    super();
    this.state = {
      food: food
    }
  }
  render() {
    const { food } = this.state
    const foods = food.map((e,i) => {
      return (
        <div key={i} className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={e.image} alt="" />
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
                  <input
                    className="input"
                    type="number"
                    value={e.quantity}
                    onChange={e => this.setState({ e: e.target.value })}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">
                    +
          </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      )
    })
    return (
      <div>
        {foods}
      </div>
    )
  }
}
