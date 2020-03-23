import React from 'react';

export const FoodBox = ({ name, calories, image, id, quantity, addFood }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={quantity} />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => {
                  addFood(name, quantity);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
