import React, { Component } from 'react';



class MenuCount extends Component {
  render() {
    const { image, name, calories, quantity } = this.props;
    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={ image } alt="food"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{ name }</strong> <br />
                <small>{ calories } cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons menu-count-quantity">
              <p>{ quantity }</p>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default MenuCount;