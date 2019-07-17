import React from 'react'

function FoodBox(props){
  const {name, calories, image, quantity, handleChange} = props
  return(
        <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            {/* <img src="https://i.imgur.com/eTmWoAN.png" /> */}
            <img src={image} alt="img"/>
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
                name = "quantity"
                type="number" 
                value={quantity}
                onChange={handleChange}
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
  )
}

export default FoodBox