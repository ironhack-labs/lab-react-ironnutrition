import React from 'react'

function Food({ obj }) {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={obj.image} alt={obj.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{obj.name}</strong> <br />
              <small>{obj.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
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

export default function FoodSingle(props) {
  return (
    <div>
      <div>
        {props.foods.map((food, i) => (
          <Food key={i} obj={food} />
        ))}
      </div>
    </div>
  )
}
