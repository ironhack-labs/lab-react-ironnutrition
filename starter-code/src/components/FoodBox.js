import React from "react"

export default function({ food, addCart, saveAmount, index }) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} alt={food.name} />
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
                onChange={e => saveAmount(e, index)}
                className="input"
                type="number"
                value={food.quantity}
              />
            </div>
            <div className="control">
              <button
                onClick={() => addCart(index, food.quantity)}
                className="button is-info"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
