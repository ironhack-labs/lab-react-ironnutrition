import React, { useState } from 'react';

function Foodbox(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  function handleChange(event) {
    setQuantity(event.currentTarget.value);
  }

  return (
    <div className="food-box shadow-sm">
      <div className="picture-container">
        <img
          className="food-picture"
          src={props.image}
          alt={`A ${props.name}`}
        />
      </div>

      <div className="">
        <strong>{props.name}</strong>
        <span className="d-block">{props.calories} cal</span>
      </div>
      <div className="d-inline-block">
        <div className="input-group h-100">
          <input
            type="number"
            className="quantity-input"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={quantity}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary btn-lg"
              type="button"
              id="button-addon2"
              onClick={() => {
                return props.addFood({ ...props, quantity: quantity });
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foodbox; 