import React from 'react'

const FoodBox = ({ onAdd, onChangeQty, arrayPos, name, calories, image, quantity}) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image} alt={name} />
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
              name={arrayPos}
              onChange={onChangeQty}
              className="input"
              type="number" 
            />
          </div>
          <div className="control">
            <button name={arrayPos} onClick={onAdd} className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
)

export default FoodBox