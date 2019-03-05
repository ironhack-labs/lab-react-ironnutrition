import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  state = {
    foods: foods
  };

  showFoods = () => {
    //App.state.foods
    let foodItems = this.state.foods.map((food, i) => {
      return (
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
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });
    return foodItems;
  };
  render() {
    return (
      <div>
        <div>{this.showFoods()}</div>
        <button>add food</button>
      </div>
    );
  }
}

export default App;
