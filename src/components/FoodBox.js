import React from 'react';
import './FoodBox.css';

const FoodBox = ({foodObject}) => {
  return (
     <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={foodObject.image} alt={foodObject.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{foodObject.name}</strong> <br />
              <small>{foodObject.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={foodObject.quantity} />
            </div>
            <div className="control">
              <button className="button is-info">
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