import React, { Component } from 'react';

class FoodBox extends Component {

  constructor() {

    super()
    this.state = {}
  }

  componentDidMount() {

    this.setState(this.props.data)
  }

  amountChange = (e) => {

    this.setState({ quantity: Number(e.target.value) })
  }

  render() {

    return (
      <div className="box">

        <article className="media">

          <div className="media-left">

            <figure className="image is-64x64">
              <img src={this.props.data.image} alt={this.props.data.name} />
            </figure>

          </div>

          <div className="media-content">
            <div className="content">

              <p>
                <strong>{this.props.data.name}</strong> <br />
                <small>{this.props.data.calories} cal</small>
              </p>

            </div>
          </div>

          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" defaultValue='0' min='0' onChange={this.amountChange} />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => { this.props.updateTodayFood(this.state) }}>
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

export default FoodBox;