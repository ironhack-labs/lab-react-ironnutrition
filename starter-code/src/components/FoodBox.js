import React, { state, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FoodsArray from "../foods.json";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFood from "./ModalForm";

const FoodBox = food => {
  food = [...FoodsArray];

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>IronNutrition</h1>
              <div>
                <div>
                  {food.map(food => (
                    <article key={food.name} style={{ display: "flex" }}>
                      <div>
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
              </div>
            </div>
            <div className="col">
              <AddFood />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FoodBox;
