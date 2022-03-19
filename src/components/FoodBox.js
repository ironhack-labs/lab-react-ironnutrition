import React from 'react';
import { useState } from 'react';

export const FoodBox = ({ name, calories, image, quantity }) => {
  const [newQuantity, setQuantity] = useState(0);
  const handleQuantityInput = (e) => setQuantity(e.target.value);

  const [selectFood, setSelectFood] = useState([]);

  function handleSelected() {
    setSelectFood({ ...selectFood, quantity: newQuantity });
    console.log(newQuantity, selectFood);
  }

  return (
    <div className="box" style={{ width: '80%', marginLeft: '30px' }}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="food" />
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
                onChange={handleQuantityInput}
                value={newQuantity}
                className="input"
                type="number"
                min="1"
              />
            </div>
            <div className="control">
              <button
                onClick={() => handleSelected()}
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
};
