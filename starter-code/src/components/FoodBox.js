import React from "react";

export const FoodBox = props => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.food.name}</strong> <br />
              <small>{props.food.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={props.food.quantity} />
            </div>
            <div className="control">
              <button onClick={()=>props.action.sum()} className="button is-info">+</button>
              <button onClick={()=>props.action.res()} className="button is-info">-</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
