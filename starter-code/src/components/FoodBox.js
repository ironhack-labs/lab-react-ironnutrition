import React, { state, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FoodsArray from "../foods.json";
import "bulma/css/bulma.css";
import NewFoodForm from "./FormFood";
import FormButton from "../components/Button";

const FoodBox = food => {
  food = [...FoodsArray];
  return (
    <>
      <h1>IronNutrition</h1>

      <div className="box" style={{ width: "40rem" }}>
        {food.map(food => (
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
                    value="0"
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
      <NewFoodForm />
    </>
  );
};

export default FoodBox;
