import React, { Component } from 'react'

export default function FoodBox({ food, handleAdd }) {
  
  const { name, image, calories, quantity } = food

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{name}</strong> <br />
                  <small>{calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number" 
                    value='1'
                    name="howMany"
                  />
                </div>
                <div className="control">
                  <button onClick={handleAdd} className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
