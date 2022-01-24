import React, { useState } from 'react';

const FoodCard = ({ name, image, quantity, calories, addTodayFood }) => {
  const [quantityInput, setQuantityInput] = useState(quantity);

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
                value={quantityInput}
                onChange={(e) => setQuantityInput(Number(e.target.value))}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => {
                  addTodayFood({ name, quantity: quantityInput, calories });
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

export default FoodCard;
