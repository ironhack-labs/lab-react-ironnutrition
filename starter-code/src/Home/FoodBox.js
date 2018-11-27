import React from "react";

const FoodBox = ({ food, numberChange, handleChangeToday }) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={food.image} alt={food.name} />
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
              className="input quantity"
              type="number"
              name="quantity"
              placeholder={food.quantity}
              onChange={numberChange}
            />
          </div>
          <div className="control">
            <button
              className="button is-info"
              onClick={() => handleChangeToday(food)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default FoodBox;
