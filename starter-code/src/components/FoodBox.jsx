import React, { Component } from 'react'

export default class FoodBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      calories: this.props.calories,
      numUnits: 1,
      name: this.props.name
    }
  }

  returnInfo(e) {
    e.preventDefault()
    this.props.addFoodChart(this.state)
  }

  addUnits(e) {
    let numUnits = e.target.value

    this.setState({
      ...this.state,
      numUnits
    })
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt={this.props.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value={this.state.numUnits}
                  onChange={e => this.addUnits(e)}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={e => this.returnInfo(e)}>
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
