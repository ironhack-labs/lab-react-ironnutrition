import React, { Component } from 'react'

export default class FoodBox extends Component {
  state = {
    quantity: 1,
    food: this.props.food,
  }

  handleInputChange = (e) => {
    console.log('hi')
    this.setState({
      quantity: e.target.value
    });
  }


  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  name="quantity"
                  className="input"
                  type="number" 
                  defaultValue="1"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="control">
                <button className="button is-info"  onClick={(e) => this.props.addFood(this.state, this.props.food)}>
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
