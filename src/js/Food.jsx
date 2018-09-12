import React, { Component } from 'react';

const Food = props => {

  return (
    <div className="box">
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
              <small>{props.calories} cal</small>
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
              // onChange={this.handleInputChange}
              />
            </div>
            <div className="control">
              <button onClick={props._increaseQty} className="button is-info">
                +
                      </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );

}

export default Food