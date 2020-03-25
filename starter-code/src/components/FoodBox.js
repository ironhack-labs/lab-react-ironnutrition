import React, { useState, useContext } from "react";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataContext } from "../DataContext";
import FormFood from "../components/FormFood";

const FoodBox = () => {
  //Xpé foods y setFoods va entre {}???
  const { foods } = useContext(DataContext);

  return (
    <>
      <main style={{ paddingTop: "4rem" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 style={{ paddingBottom: "2rem" }}>IronNutrition</h1>
              <div>
                <div className="list-group">
                  {foods.map((food, i) => (
                    <article key={i} style={{ display: "flex" }}>
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
            <FormFood />
          </div>
        </div>
      </main>
    </>
  );
};

export default FoodBox;
