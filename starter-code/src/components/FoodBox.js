import React from 'react'
/* import foods from '../foods.json' */

const FoodBox = ({name, calories, image, quantity}) =>{
  return(
    <div className="box is-half">
      
      <div className="container is-half">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={name}/>
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
              <input
                className="input"
                type="number" 
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

    </div>
  )
}

export default FoodBox;