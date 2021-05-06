import React from 'react';

export default function FoodBox({ name, calories, image, addTodaysFood }) {  
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
              <div className="control">
                <button className="button is-info" type="submit">
                  +
                </button>
              </div>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
}
