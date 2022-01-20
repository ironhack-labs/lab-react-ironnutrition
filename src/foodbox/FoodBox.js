import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const FoodBox = ({ name, calories, image, quantity, todayFood }) => {
  const [newQuantity, setNewQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    todayFood({
      name,
      calories: newQuantity * calories,
      image,
      quantity: newQuantity,
    });
    setNewQuantity(1);
  };

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
                min={1}
                onChange={(e) => setNewQuantity(parseInt(e.target.value))}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleSubmit}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
