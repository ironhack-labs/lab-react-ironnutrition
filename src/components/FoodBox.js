import React, { useState } from 'react';
import foods from '../foods.json';

const foodList = foods.slice();

function FoodBox(props) {
  const { food } = props;
  const [initialState, setInitialState] = useState(foodList);

  function handleFormChange(event) {
    setInitialState(event.target.value);
  }

  return (
    <div>
      <div
        className="box"
        style={{ margin: '20px', height: '130px', width: '550px' }}
      >
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
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
                  value={food.quantity}
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
