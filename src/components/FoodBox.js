import React, { useState } from 'react';
import foods from '../foods.json';

const foodList = foods.slice();

function FoodBox() {
  const [initialState, setInitialState] = useState(foodList);
  console.log('init:', initialState);

  function handleFormChange(event) {
    setInitialState(event.target.value);
  }

  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={initialState.image} alt={initialState.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{initialState.name}</strong> <br />
                <small>{initialState.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={handleFormChange}
                  className="input"
                  type="number"
                  value={initialState.quantity}
                />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FoodBox;
