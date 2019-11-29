import React from "react";

export default function FoodBox({ foods, clbkChange, clbkClick }) {
 
  return foods.map((food,i) => (
    <div key={i} className="box">
      <article className="media">
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
              <input id={i} className="input" onChange={clbkChange} type="number" placeholder="0"/>
            </div>
            <div className="control">
              <button value={i} className="button is-info" onClick={clbkClick}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  ));
}
