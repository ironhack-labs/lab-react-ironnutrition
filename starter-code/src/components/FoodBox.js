import React, { useState } from "react";

const FoodBox = ({ image, name, calories, handleAdd, id }) => {
  const [qty, setqty] = useState(1);
  return (
    <div className="box is-paddingless">
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
                value={qty}
                onChange={e => {
                  const newQty = e.target.value;
                  setqty(newQty);
                }}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => handleAdd(id, name, qty, calories)}
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

export default FoodBox;
