import React, { Component } from 'react'

export default class FoodBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.quantity
    }
  }
  ren
  handleNameState = (e) => {
    let newState = {
      quantity: e.target.value
    }

    this.setState(newState)

  }

  addComidIntermedia = () => {
    this.props.evento(this.props.name, this.state.quantity)
  }


  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.handleNameState}
                />
              </div>
              <div className="control">
                <button onClick={this.addComidIntermedia} className="button is-info">
                  +
          </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
