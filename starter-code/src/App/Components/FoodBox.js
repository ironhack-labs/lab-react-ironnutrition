import React from 'react';

export default function ( { index, food, quantity, handleChange, isList } = this.props ) {
  if ( !isList ) return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name + " image"} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number" 
                value={food.quantity}
                name="food-quantity"
                index={index}
                onChange={ event => handleChange(event, index) }
              />
            </div>
            <div className="control">
              <button className="button is-info" type="submit" name="add-food-btn" index={index} onClick={ event => handleChange(event, index) } >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
    )
  else return(
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name + " image"} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <p>{food.quantity}</p>
            </div>
            <div className="control">
              <button className="button is-info" name="delete-food-btn" index={index} onClick={ event => handleChange(event, index) } >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}