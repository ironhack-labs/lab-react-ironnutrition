import React, { state, useState } from "react";
import foodsArray from "../foods.json";

const FoodBox = food => {
  const state = { food: foodsArray };
  return (
    <>
      <h1>IronNutrition</h1>
      <div className="box">
        {foodsArray.map(food => (
          <article key={food.name} className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value="1"
                    onChange={useState}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default FoodBox;
