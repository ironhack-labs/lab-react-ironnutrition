import React, { useState } from 'react';

function Foodbox(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  function handleChange(event) {
    setQuantity(event.currentTarget.value);
  }

  return (
    <div className="food-box shadow">
      <div className="d-flex justify-content-start m-2">
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
      </div>

      <div className="input-group quantity-input-container">
        <input
          type="number"
          className="form-control form-control-lg quantity-input"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={quantity}
          onChange={handleChange}
        />
        <div className="input-group-append w-50">
          <button
            className="btn btn-primary btn-lg w-100"
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
  );
}

export default Foodbox;
