import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img alt="food" src={this.props.food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.food.name}</strong> <br />
                  <small>{this.props.food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div class="field">
                <div class="control">
                  <div class="select is-primary">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

