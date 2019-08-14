import React from 'react';

const FoodBox = ({name, image, calories, quantity, changeQuantity}) => {
  return (
    <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={image} alt="food" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>`{calories} cal`</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input 
            onChange={()=> {changeQuantity}}
            className="input"
            type="number" 
            value={quantity}
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
  )
}

export default FoodBox