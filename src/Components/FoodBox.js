import React from 'react';


const FoodBox = props => {

  let newQuantity = 0

  const handleChange = (event) => {
    newQuantity = event.target.value;
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} alt="food" />
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
              <input className="input" type="number" placeholder={props.quantity} min="1" onChange={handleChange}/>
            </div>
            <div className="control">
              <button className="button is-info" onClick={() => props.handleClick(props.name, props.image, props.calories, newQuantity)}>              
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