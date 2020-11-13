import React, {useState} from 'react';
import 'bulma/css/bulma.css';

function FoodBox(props){

    return (

      <div>
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.image}/>
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
          <input className="input" onChange={props.onChange} type="number" value={props.value} />
        </div>
        <div className="control">
          <button className="button is-info" onClick={props.onClick}>
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

export default FoodBox;