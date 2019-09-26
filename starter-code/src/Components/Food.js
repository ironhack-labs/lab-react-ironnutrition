import React from 'react'
function Food({name, image, calories}){
  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={image}  alt="name"/>
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
              name="qty"
              type="number" 
              value="1"
            />
          </div>
          <div className="control">
            <button className="button is-warning">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
export default Food
