import React, { Component } from "react";
import foods from "./foods.json";

export default class FoodBox extends Component {
  state = {
    foodList: foods
  };

  newerFoodArray = this.state.foodList.map((eachFood, i) => {
    return (<div key={i} className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img alt="pizza" src={eachFood.image} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong> {eachFood.name}</strong> <br />
            <small> Calories: {eachFood.calories}</small>
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
  </div>);
  });

  render() {
    return (
      <div>
       {this.newerFoodArray}
      </div>
    );
  }
}
