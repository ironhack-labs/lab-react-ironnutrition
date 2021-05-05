import React from 'react';
import 'bulma/css/bulma.css';

const FoodBox = ({food }) => {
    console.log(food)
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} />
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
              <input className="input" type="number" name={food.id} value={food.quantity} onChange={food.handleChange}/>
            </div>
            <div className="control">
              <button onClick={food.addFood} className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
