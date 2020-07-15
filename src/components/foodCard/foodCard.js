import React from 'react'

const FoodCard = ({ name, calories, image, quantity, handleChange }) => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt= "imagen" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
                <small>{calories} calories</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
                <input className="input" name ="quantity" type="number" value = {quantity} onChange={handleChange} />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default FoodCard