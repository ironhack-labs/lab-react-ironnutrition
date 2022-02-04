import React, { useState } from 'react';

function FoodBox(props) {
  const [quantity, setQuantity] = useState(props.quantity ? props.quantity : 1);
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} alt="food-icon" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>{props.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                min={1}
                value={quantity}
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="control">
              <button
                onClick={() => props.selectFood({ ...props, quantity })}
                className="button is-info"
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