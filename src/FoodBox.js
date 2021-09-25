import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function FoodBox(props) {
  const [quantity, setQuantity] = useState('0');

  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} alt="foodPic" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.food.name}</strong> <br />
              <small>{props.food.calories}</small>
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
                onChange={quantityChangeHandler}
              />
            </div>
            <div className="control">
              <button type="button" className="button is-info">
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
