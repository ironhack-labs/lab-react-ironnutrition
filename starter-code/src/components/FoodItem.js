import React from "react";

export const FoodItem = props => {
  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={props.data.image} alt={props.data.image} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.data.name}</strong> <br />
            <small>{props.data.calories} cal</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="number" />
            {/* value="1" */}
          </div>
          <div className="control">
            <button className="button is-info">+</button>
          </div>
        </div>
      </div>
    </article>
  );
};
