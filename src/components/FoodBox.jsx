import React from 'react';
import { Component } from 'react';
// import foods from '../foods.json';
import 'bulma/css/bulma.css';
// import AddFood from './AddFood';

// const allFoodList = [...foods];

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  handleChangeQuantity = (event) => {
    console.log('Event', event);
    this.setState({
      quantity: event.target.value,
    });
  };
  handleClick = () => {
    console.log('clickkkk');
    const selectedFood = {
      quantity: Number(this.state.quantity),
    };
    this.props.handleSelect(selectedFood);
  };
  render() {
    const { name, calories, image } = this.props.food; //food it s the vaue i have assigned in app.js to item(of the map)

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={image} alt="foodimage" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories} </small>
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
                  onChange={this.handleChangeQuantity}
                />
              </div>
              <div className="control">
                <button onclick={this.handleClick} className="button is-info">
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

/* <div class="columns">
  <div class="column">
    First column
  </div>
  <div class="column">
    Second column
  </div>
  <div class="column">
    Third column
  </div>
  <div class="column">
    Fourth column
  </div>
</div> */
