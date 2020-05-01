import React, { Component } from 'react'
import 'bulma/css/bulma.css'

export default class FoodBox extends Component {
  constructor(props) {
    super(props)

    this.state = { quantity: 1 }
  }

  addTodayHandler = () => {
    const { name, calories, addToday } = this.props

    const today = {
      name,
      calories,
      quantity: this.state.quantity,
    }

    addToday(today)
  }

  render() {
    const { name, image, calories } = this.props

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <fieldset>
                <div className="control">
                  <input
                    name="quantity"
                    className="input"
                    type="number"
                    value={this.state.quantity}
                    onChange={e =>
                      this.setState({ quantity: parseInt(e.target.value, 10) })
                    }
                  />
                </div>
              </fieldset>
              <fieldset>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={this.addTodayHandler}
                  >
                    +
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
