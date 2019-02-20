import React, { Component } from "react";
import foods from "../foods.json";
import FoodForm from "./FoodForm.js";

import "./FoodBox.css";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = { foodArray: foods };
  }

  addNewFood(foodObject) {
    const allFood = this.state.foodArray;
    allFood.unshift(foodObject);
    this.setState({ foodArray: allFood });
  }

  render() {
    const { foodArray } = this.state;

    return (
      <div>
        <FoodForm foodSubmit={foodObject => this.addNewFood(foodObject)} />
        {foodArray.map((oneFood, index) => {
          return (
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    {/* FOOD IMAGE */}
                    <img src={oneFood.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      {/* FOOD NAME */}
                      <strong>{oneFood.name}</strong> <br />
                      {/* FOOD CALORIES */}
                      <small>{oneFood.calories}</small>
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
                      <button className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
