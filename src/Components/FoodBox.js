import React, { Component } from 'react';

class FoodBox extends Component {
  state = {
    quantity: 1,
  };
  handleInputChange = (event) => {
    const { value } = event.target;

    this.setState({
      quantity: Number(value),
    });
  };
  handleAddTodaysFood = (event) => {
    const todaysFoodObject = {
      ...this.props.food,
      quantity: this.state.quantity,
    };
    console.log(todaysFoodObject)
    this.props.addFood(todaysFoodObject)
  }
  render() {
    const { name, calories, image } = this.props.food;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="text" />
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
              <div className="control">
                <input
                  onChange={this.handleInputChange}
                  className="input"
                  type="number"
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button
                  onClick={this.handleAddTodaysFood}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
