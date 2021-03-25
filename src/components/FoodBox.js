import React, { Component } from 'react';
import './FoodBox.css';

const FoodBox = ({
  image,
  name,
  calories,
  quantity,
  addFood,
  handleInputChange,
}) => {
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
          <form name={name} onSubmit={addFood}>
            <label>
              <input
                name={name}
                className="input"
                min="1"
                type="number"
                value={quantity}
                onChange={handleInputChange}
              />
            </label>
            <input className="button is-info" type="submit" value="+" />
          </form>
        </div>
        <div></div>
      </article>
    </div>
  );
};

export default FoodBox;
