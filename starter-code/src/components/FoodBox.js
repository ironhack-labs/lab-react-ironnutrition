import React, { Component } from 'react'

export default class FoodBox extends Component {
  state = {
    name: this.props.name,
    calories: this.props.calories,
    quantity: this.props.quantity,
  }
  
  modifyQuantity = (e) => {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  addToList = (e) => {
    e.preventDefault();
    if (this.state.quantity !== 0) {
      let totalCalories = this.state.calories * this.state.quantity;
      let food = this.state;
      food.totalCal = totalCalories;
  
      this.props.addInCaloriesCounter(food);
      this.setState({quantity: 0})
    }

  }
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.state.name}</strong> <br />
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
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.modifyQuantity}
                />
              </div>
              <div className="control">
                <button onClick={this.addToList} className="button is-info">
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
