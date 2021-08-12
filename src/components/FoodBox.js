import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './FoodBox.css';

function FoodBox(props) {
  const {food:{name, calories, image}} = props;
  const [state] = useState({name: props.food.name, calories: props.food.calories, image: props.food.image});
  const [input, setInput] = useState('')
  
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
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={input} onChange={((event)=>setInput(event.target.value))}/>
              </div>
              <div className="control">
                <button className="button is-info" onClick={(() => props.handleFood(state, input))}>
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