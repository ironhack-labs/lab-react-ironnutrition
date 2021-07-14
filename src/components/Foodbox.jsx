import React, { Component } from 'react'
import 'bulma/css/bulma.css';

class Foodbox extends Component {

  render() {
    const { name, calories, image } = this.props
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br/>
                <small>{calories} cal</small>
              </p>
            </div>
          </div>

          <div className="media-right">
            <div className="field has-addons">
              <form onSubmit={this.props.onAddCalories}>
                  <input type="hidden" name="name" value={name} />
                  <input type="hidden" name="calories" value={calories} />
                <div className="control">
                  <input className="input" name="quantity" type="number"/>
                </div>
                <div className="control">
                  <button type="submit" className="button is-info">
                   +
                  </button>
                </div>
              </form>
            </div>
                  
            </div>
          </article>
        </div>
        )
  }
}

export default Foodbox