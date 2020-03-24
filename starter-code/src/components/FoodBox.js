import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { FoodsContext } from "../context/Context";
import { FoodItem } from "./FoodItem";

export const FoodBox = food => {
  const { foods } = useContext(FoodsContext);
  console.log("foods data --- >>>", foods);
  return (
    <>
      {foods.map((food, i) => (
        <div key={i} className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt={food.image} />
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
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};
