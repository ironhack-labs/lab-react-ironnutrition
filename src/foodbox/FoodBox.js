import React, { Component } from 'react';

export default class FoodBox extends Component {
  state = {
    number: '1',
  };

  updateAmount = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setFood = (e) => {
    this.props.onSetFood({
      amount: this.state.number,
      food: this.props.food
    })
  }

  render() {
    const { food } = this.props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={food.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  name="number"
                  onChange={this.updateAmount}
                  value={this.state.number}
                />
              </div>
              <div className="control">
                <button onClick={this.setFood} className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
