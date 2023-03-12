import "./index.css";
import React, { Component } from "react";
import foods from '../../foods.json';


const FoodBox = ({ name, calories, image, servings }) => {
    return (
        <div className="FoodBox">
    <div className='card'>
        <h2>{name}</h2>
        <img src={image} width={200} />
        <p>Calories:<strong>{calories} kcal</strong></p>
        <p>Servings:<strong>{servings}</strong></p>
        <button className="btn btn-primary">Delete</button>
    </div>
  
</div> 
    )
}


export default FoodBox;