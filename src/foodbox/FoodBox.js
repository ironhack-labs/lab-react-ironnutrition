import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const FoodBox = ({ name, calories, image, quantity }) => {
  const [newQuantity, setNewQuantity] = useState(0);

  return (
    <div className="box">
      <article className="media is-align-items-center">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={newQuantity}
                onChange={(e) => setNewQuantity(e.target.value)}
              />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
