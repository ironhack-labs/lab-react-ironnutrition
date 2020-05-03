import React from 'react'



export default function FoodBox(props) {

  
    return (
        <div>
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img alt='test'src={props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.name}</strong> <br />
          <small>{props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input onChange={(e) => props.handleInput(e)} 
            className="input"
            type="number" 
            value={props.quantity}
          />
        </div>
        <div className="control">
          <button onClick={() => props.addQuantity(props.id)} className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
            
        </div>
    )
}
