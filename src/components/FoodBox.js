import React from 'react';
import './FoodBox.css'
import foods from '../foods.json'




const FoodBox = ({name, calories, image, quantity}) => {

    return (
<div className="box">
 
    <div className="media-left">
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{calories} cal</small>
        </p>
      </div>
    </div>
       <div className="media-right">
          <input className="input" type="number" value={quantity} />
          <button className="button-plus">
            +
          </button>
      </div> 
    </div>
        
       
    )
}



export default FoodBox;

