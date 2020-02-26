import React, { Component } from "react";
import shortid from "shortid";

export default class FoodBox extends Component {
  state = {
    id: this.props.food.id,
    name: this.props.food.name,
    calories: this.props.food.calories,
    image: this.props.food.image,
    quantity: this.props.food.quantity
  };

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newTodaysFood = this.state;
    newTodaysFood.id = shortid.generate();

    this.props.addTodaysFood(newTodaysFood);

    this.setState({
        id: this.props.food.id,
        name: this.props.food.name,
        calories: this.props.food.calories,
        image: this.props.food.image,
        quantity: this.props.food.quantity
    });
  };

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
                  className="input"
                  type="number"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button onClick={this.handleSubmit} className="button is-info">
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
