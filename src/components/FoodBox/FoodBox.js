import React, { Component }  from 'react';
import './FoodBox.scss'

class FoodBox extends Component {
  render() {
    const foods  = this.props.food;

    return (
      <div>
        {foods.map((food) => {
          return (
            <div className="box">
              <div className="box__img">
                <img src={food.image} className="box__photo" />
              </div>

              <div className="box__info">
                <h3>{food.name}</h3>
                <p>{food.calories} cal</p>
              </div>

              <div className="box__controls">
                <input className="box__input" type="number" value="1" />
                <button className="box__btn">+</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default FoodBox