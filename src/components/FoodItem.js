import React from 'react';

export default function FoodItem(props) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.item.image} alt="food" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.item.name}</strong> <br />
              <small>{props.item.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" readOnly type="number" value={props.item.quantity} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => {props.onAdd(props.item)}}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
