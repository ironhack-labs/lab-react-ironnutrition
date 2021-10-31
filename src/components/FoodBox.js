import React, { useState } from 'react';
import foods from '../foods.json';

const foodList = foods.slice();

function FoodBox(props) {
  const [initialState, setInitialState] = useState(foodList);

  function handleFormChange(event) {
    setInitialState(event.target.value);
  }

  return (
    <div>
      <div
        className="box"
        style={{ margin: '20px', height: '100px', width: '550px' }}
      >
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.image} alt={props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.name}</strong> <br />
                <small>{props.calories} cal</small>
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
                  value={props.quantity}
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
