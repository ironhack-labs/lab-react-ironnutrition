import React, { Component }  from 'react';
import './FoodBox.scss'

class FoodBox extends Component {
  render() {
    const food  = this.props.food;

    return (
      <div className="box">
        <div className="box__img">
          <img src="https://i.imgur.com/eTmWoAN.png" className="box__photo" />
        </div>

        <div className="box__info">
          <h3>{food[0].name}</h3>
          <p>{food[0].calories} cal</p>
        </div>

        <div className="box__controls">
          <input className="box__input" type="number" value="1" />
          <button className="box__btn">+</button>
        </div>
      </div>
    )
  }
}

export default FoodBox