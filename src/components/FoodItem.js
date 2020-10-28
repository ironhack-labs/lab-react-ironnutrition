import React, { Component } from 'react';
import './styles/FoodItem.css';

class FoodItem extends Component {
  state = {
    qty: 0,
  };

  handleQty = (e) => {
    // console.log(e.target.value);
    this.setState({
      qty: e.target.value,
    });
  };
  render() {
    const { food, onTodaysFood } = this.props;
    return (
      <div className="foodItem__container">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
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
                    placeholder="0"
                    onChange={this.handleQty}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => {
                      let qty = this.state.qty;
                      onTodaysFood(food, qty);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default FoodItem;
