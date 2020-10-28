import React, { Component } from 'react'

export default class FoodItem extends Component {
    render() {
     const {singleItem} = this.props
        return (
            <div className="box">
                <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img  alt="fig" src={singleItem.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{singleItem.name}</strong> <br />
                    <small>{singleItem.calories} cal</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value={singleItem.quantity} />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
            </div>
        )
    }
}
