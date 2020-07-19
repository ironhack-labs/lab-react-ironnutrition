import React from 'react';

export default function FoodBox(props) {
  return (
    <div className="box" style={{display: props.display}}>
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} alt={props.name}/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>Calories: {props.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" name="quantity"/>
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => props.increaseQuantity(props.name)}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
