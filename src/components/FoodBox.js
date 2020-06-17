import React, {Component} from 'react'
function FoodBox (props){
    return (
    <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.ingredient.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.ingredient.name}</strong> <br />
          <small>{props.ingredient.calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
          <form onSubmit={(e) => {props.onSubmit(e, props.ingredient)}}>
        <div className="control">
          <input className="input" name="quantity" type="number"  />
        </div>
        <div className="control">
          <button type="submit" className="button is-info" >
            +
          </button>
        </div>
          </form>
      </div>
    </div>
  </article>
</div>
    )
}
export default FoodBox;