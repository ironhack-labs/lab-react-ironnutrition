import React, { Component }  from 'react';
import './FoodBox.scss'

class FoodBox extends Component {

  render() {
    const foods = this.props.foods;

    return (
      <div>
        {foods.map(({ image, name, calories, id }) => {
          return (
            <div className="box" key={id}>
              <div className="box__img">
                <img src={image} className="box__photo" alt="food" />
              </div>

              <div className="box__info">
                <h3>{name}</h3>
                <p>{calories} cal</p>
              </div>

              <div className="box__controls">
                <input className="box__input" type="number" value="1" />
                <button className="box__btn">+</button>
              </div>
            </div>
            )
          }
        )}
      </div>
    )
  }
}

export default FoodBox