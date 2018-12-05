import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';

class FoodBox extends Component{

  state = {
    foods: foods,
  }

  // function
  // function
  // function


  render(){
    
    const listOfFoods = this.state.foods.map((food, index)=>{
      
      return(
        
        <div className="box">
    <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} />
      </figure>
    </div>
    <div className="media-content">
    <div className="content">
        <p>
        <strong>{food.name}</strong> <br />
        <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value="1"
            />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
  })
  return(
    <div>{listOfFoods}</div>
  )
  
  }
}
export default FoodBox;