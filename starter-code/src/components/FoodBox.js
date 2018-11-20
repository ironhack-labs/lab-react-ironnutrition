import React from 'react';

const FoodBox = ({ food, addFood, index }) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={food.image} alt={food.name + " image"} />
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
              defaultValue="0"
              type="number"
              name="quantity"
            />
          </div>
          <div className="control">
            <button className="button is-info" onClick={(e) => addFood(e, index)}>
              +
          </button>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default FoodBox;