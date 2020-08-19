import React from 'react'


function FoodBox(props) {
    return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.food.image} alt={props.food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.food.name}</strong> <br />
                <small>{props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" onChange={() => props.onQuantity (props.id)} />
              </div>
              <div className="control">
                <button onClick={() => props.onToday(props.id)} className="button is-info">
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