import React from 'react';
import './FoodBox.css';

export default function FoodBox({ name, calories, image, addTodaysFood, removeFood }) {
  const handleSubmitTodaysFood = (event) => {
    event.preventDefault();
    const quantity = event.target.querySelector('input').value * 1;
    calories = calories * 1;
    quantity > 0 && addTodaysFood({ name, calories, quantity });
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="" />
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
          <form onSubmit={(e) => handleSubmitTodaysFood(e)}>
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="quantity"
                  min="1"
                />
              </div>
              <div >
                <button className="button add is-info" type="submit">
                  +
                </button>
                <button className="button trash is-danger" onClick={() => removeFood(name)}>
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
}
