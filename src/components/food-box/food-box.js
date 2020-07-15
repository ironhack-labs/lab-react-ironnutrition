import React, { Component } from 'react';

import food from './../../foods.json';
import FoodForm from './../foodForm/foodForm';
import './food-box.css';

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      food,
      isVisible: false
    };
  }

  render() {
    return (
      <main>
        <button onclick={this.SwitchButton}> Boton
          {this.state.isVisible ? <FoodForm /> : false}
        </button>

        <div className="box">
          <article className="media">
            {this.state.food.map((food, index) => (
              <div>
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
                        value={food.quantity}
                      />
                    </div>
                    <div className="control">
                      <button className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </article>
        </div>
      </main>
    );
  }
}

export default FoodBox;
