import { PromiseProvider } from 'mongoose';
import React from 'react';
import foodsJson from '../../foods.json';



function FoodBox(){
  const [foods, setFoods]=React.useState(foodsJson)
    return (
<div className="box">
  {foods.map((foods,idx)=>(
<article className="media">
  <div className="media-left">
    <figure className="image is-64x64">
    <img src={foods.image} alt={foods.name} />
    </figure>
  </div>
  <div className="media-content">
    <div className="content">
      <p>
        <strong>{foods.name}</strong> <br />
        <small>Calories: {foods.calories}</small>
      </p>
    </div>
  </div>
  <div className="media-right">
    <div className="field has-addons">
      <div className="control">
        <input className="input" type="number" value="1" />
      </div>
      <div className="control">
        <button className="button is-info">
          +
        </button>
      </div>
    </div>
  </div>
</article>
  ))}
</div>)
}

export default FoodBox