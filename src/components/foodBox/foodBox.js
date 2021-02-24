import React, { Component } from 'react';
import 'bulma/css/bulma.css';

function FoodBox(props) {
  const {
    key,
    name,
    calories,
    image,
    quantity,
    updateQuantity,
    toggleDisplay,
  } = props;

  //   console.log(props);

  return (
    <div>
      <article key={key} className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}</small>
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
                onClick={() => toggleDisplay(name, quantity)}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => toggleDisplay(name)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
