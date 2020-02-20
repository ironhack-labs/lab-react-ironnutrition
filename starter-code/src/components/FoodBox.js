import React from 'react'


function FoodBox(props) {
    const {name, calories, image, quantity} = props.food
    const {handleInput, id, addFood} = props
    return (
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
                  id={id}
                  type="number" 
                  value={quantity}
                  onChange={ (e) => handleInput(e) }
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={ () => {(quantity) ? addFood(id) : null}}>
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
