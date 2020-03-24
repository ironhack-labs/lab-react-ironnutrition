import React, { useState } from "react";

export const FoodBox = ({ children, setChange, setClick }) => {
  const handleChange = ({ target }) => {
    const quantity = Number(target.value);
    setChange(quantity);
  };

  const handleClick = () => setClick({ ...children });

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={children.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{children.name}</strong> <br />
              <small>{children.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={children.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleClick}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
