import React from "react";

export default function FoodBox({ foods, clbkChange, clbkClick }) {
  return foods.map((foods, i) => (
    <div key={i} className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={foods.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{foods.name}</strong> <br />
              <small>{foods.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                id={i}
                onChange={clbkChange}
                className="input"
                type="number"
                placeholder="0"
              />
            </div>
            <div className="control">
              <button onClick={clbkClick} className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  ));
}
