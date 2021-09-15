import React from 'react';

export const Foodbox = ({ foods }) => {
  return (
    <div className="box">
      {foods.map((food, index) => {
        return (
          <article key={index} className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt="foodimg" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
