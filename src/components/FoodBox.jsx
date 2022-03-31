import 'bulma/css/bulma.css';
import React from 'react';


const FoodBox = (props) => {
    return (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={props.image} alt="" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{props.name}</strong> <br />
            <small>{props.calories} cal</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          {/* <div className="control">
            <input className="input" name="quantity" type="number" value="1" readOnly/>
          </div> */}
          <div className="control">
            <button onClick={() => props.addToday(props)} className="button is-info">+</button>
          </div>
        </div>
      </div>
    </article>
  </div>
    )
};

export default FoodBox;

