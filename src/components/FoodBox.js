import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function FoodBox(props) {
  const [quantityState, setQuantityState] = useState(0);

  const { name, calories, image } = props.food;
  const handleClick = () => {
    const foodObj = { name, calories, quantity: quantityState };
    props.addFood(foodObj);
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
                onChange={(e) => setQuantityState(e.target.value)}
                className="input"
                type="number"
                value={quantityState}
              />
            </div>
            <div className="control">
              <button onClick={handleClick} className="button is-info">
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
