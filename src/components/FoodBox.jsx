import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export class FoodBox extends Component {
  //   state = {
  //     name: this.props.food.name,
  //     calories: this.props.food.calories,
  //     quantity: this.props.food.quantity,
  //   };

  //   addItem = (event) => {
  //     let { value } = event.target;
  //     this.setState({ quantity: value });
  //   };

  //   AddQuantity = () => {
  //     this.props.createTotal(this.state);
  //   };

  render() {
    const { name, calories, image, quantity } = this.props;
    return (
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
              <small>{calories}cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={quantity} />
            </div>
            <div className="control">
              <button className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default FoodBox;
