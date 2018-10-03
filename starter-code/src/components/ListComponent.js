import React, { Component } from "react";
import foods from "../foods.json";
import { FoodBox } from "./FoodBox";

export class ListComponent extends Component {
  constructor() {
    super();
    this.state = {
      dishes: [
        {
          name: "Hamburger",
          calories: 400,
          image: "https://i.imgur.com/LoG39wK.jpg",
          quantity: 0
        }
      ]
    };
  };

  render() {
    return(
      <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="{{this.state.dishes[0].image}}" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.dishes[0].name}</strong> <br />
                <small>{this.state.dishes[0].calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    )

  }







}
