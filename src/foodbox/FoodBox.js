import React from 'react';
import "bulma/css/bulma.css"
import "./FoodBox.css"

const FoodBox = (props) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} alt="foodgood"/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.food.name}</strong> <br />
              <small>{props.food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" name={props.food.name} 
              onChange = {props.handleChangeQuant}
              type="number" value={props.food.quantity}/>
            </div>
            <div className="control">
              <button onClick={props.addToList} name={props.food.name} className="button is-info" >
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