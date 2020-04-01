import React, { Component } from 'react';

function foodBox (props) {
    return (
        
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
          <input
            className="input"
            type="number" 
            value="1"
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
    )
}

export default foodBox;


{/* <div className="row">
            <img src={props.image} alt=""/>
            <h3>{props.name}</h3>
            <h3>{props.calories}</h3>
            <h3>{props.quantity}</h3>
            {/* <button onClick={()=>{props.deleteThisContact(props.index)}}>delete</button> */}
        // </div> */}

        