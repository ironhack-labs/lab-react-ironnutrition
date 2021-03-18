import 'bulma/css/bulma.css';
import React from 'react'

const FoodBox = ({food, handleAddChoice, handleQuantityChange}) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img alt='img' src={food.image} />
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
              <input className="input" type="number" value={food.quantity} onChange={(e) =>handleQuantityChange(e,food.name)}/>
            </div>
            <div className="control">
              <button onClick={()=>handleAddChoice(food)} className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;
