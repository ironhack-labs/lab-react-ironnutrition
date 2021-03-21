import React, { Component } from 'react'
import foodsJSON from './../foods.json';

class FoodBox extends Component {

    state = {
        foods: foodsJSON,
    };

    render() {
        return (
            <div className="box">
        {this.state.foods.map((food, index) => (
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64" alt="food">
        <img src={food.image} alt="" />
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
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
  ))}
</div>
        )
    }
}

export default FoodBox;