import React from "react";

const FoodBox = ({
  quantity,
  calories,
  image,
  name,
  handleQuantityChange,
  addTodayFood
}) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image} alt="food" />
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
            <input
              className="input"
              type="number"
              value={quantity}
              onChange={handleQuantityChange(name)}
            />
          </div>
          <div className="control">
            <button onClick={addTodayFood(name)} className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default FoodBox;
