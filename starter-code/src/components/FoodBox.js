import React from "react"
import foods from "../foods.json"
const FoodBox = props => {
return (
  
    <div className="box">
     
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.image} />
      </figure>
    </div>
  
    <div className="media-content">
      <div className="content">
        <p>
        
          <strong>{props.name} <br></br>{props.calories} cal</strong> <br />
          <small></small>
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
        
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
)





}









export default FoodBox
