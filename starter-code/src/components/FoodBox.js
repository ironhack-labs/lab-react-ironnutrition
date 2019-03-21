import React from 'react'


export default function FoodBox(props) {

  handleChange = theFoodCart => {
      {props.name}
      {props.quantity}
      {props.name}
    
    foodsCartCopy.push(theFoodCart)
          
    }
  

  return (
    <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.image} alt="foodimage"/>
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
                <input
                  className="input"
                  type="number" 
                  value={props.quantity}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={(e) => this.handleClick(e)}> + </button>
                {/* <button className="button is-info" onClick={(e) => this.handleChange(e)}> + </button> */}
               </div>
            </div>
          </div>
        </article>
      </div>
  )
}
