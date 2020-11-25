import React, { useState } from 'react';

function Foodbox(props) {
  const [quantity, setQuantity] = useState(props.food.quantity);

  const handleQuantity = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };

  let foodForTotal = {
    name: props.food.name,
    quantity,
    calories: quantity * props.food.calories,
  };

  const addToTotal = (event) => {
    event.preventDefault();
    props.addToTotal(foodForTotal);
    setQuantity(0);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} alt={props.food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.food.name}</strong> <br />
              <small>{props.food.calories} cal</small>
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
                onChange={handleQuantity}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={addToTotal}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Foodbox;
