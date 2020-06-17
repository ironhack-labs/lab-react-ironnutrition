import React from 'react';
import 'bulma/css/bulma.css';

export default function FoodBox(props) {

    let myStyle = {
        width: "45%",
        marginLeft: "20px"
    }
    return (
    <div className="box" style={myStyle} >
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={props.image} />
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
            <input className="input" type="number" value="1" />
          </div>
          <div className="control">
            <button className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>)
}

