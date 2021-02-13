import React, { useState } from 'react';

const FoodBox = ({ info: { name, calories, image, quantity }, addFood }) => {
  const [newQuantity, setQuantity] = useState(quantity);
  const handleQuantityChange = (event) => {
    let { value } = event.target;
    if (value < 0) value = 0;
    setQuantity(value);
  };
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name} />
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
                value={newQuantity}
                onChange={handleQuantityChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => addFood(name, newQuantity)}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
