import React from 'react';
import { useState} from 'react'

function FoodBox(props) {

  const { food, foodSelect} = props
  
  const [quantity, setQuantity] = useState(1)

  function updateQuantity(e){
    setQuantity(e.target.value)
  }

  function clickHandler(){
    food.quantity=parseInt(quantity)
    foodSelect(food)
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.food.image} alt="image" />
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
              <input className="input" type="number" value={ quantity }  onChange={ updateQuantity }/>
            </div>
            <div className="control">
              <button className="button is-info" onClick={ clickHandler }>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
