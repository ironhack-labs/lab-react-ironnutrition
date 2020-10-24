import React, {useState} from 'react'


export default function FoodBox(props) {

  function amount(e) {
    const { quantity, value } = e.target;
    props.item.quantity =  value 
  }

  
  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.item.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.item.name}</strong> <br />
                <small>{props.item.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input onChange={amount} className="input" type="number" name="quantity" defaultValue={props.item.quantity}/>
              </div>
              <div className="control">
                <button onClick={() => props.onAdd(props.item)} className="button is-info" type="submit">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
