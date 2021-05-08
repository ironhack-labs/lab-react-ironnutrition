import React, { useState } from 'react'

const FoodBox = ({ name, image, calories }) => {

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="food-item" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{ name }</strong> <br />
              <small>{ calories } cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" name="quantity" type="number" value={quantity} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleIncrement} > + </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default FoodBox