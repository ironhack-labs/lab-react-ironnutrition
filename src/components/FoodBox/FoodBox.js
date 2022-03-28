import React, { Component }  from 'react';
import './FoodBox.scss'

class FoodBox extends Component {

  addFood = () => {
    console.log('hola')
  }

  render() {
    const foods = this.props.foods;
    const today = this.props.today

    return (
      <div className="foods">
        <div className="foods__recipes">
          {foods.map((food) => {
            return (
              <div className="foods__single" key={food.id}>
                <div className="foods__img">
                  <img src={food.image} className="foods__photo" alt="food" />
                </div>

                <div className="foods__info">
                  <h3>{food.name}</h3>
                  <p>{food.calories} cal</p>
                </div>

                <div className="foods__controls">
                  <input className="foods__input" type="number" defaultValue="1" />
                  <button className="foods__btn" onClick={() => this.props.addToday(food)} value={this.props.today}>+</button>
                </div>
              </div>
              )
            }
          )}
        </div>

        <div className="foods__today">
          <h1>Today's foods</h1>
          {today.map((todayFood) => {
            return (
              <div key={todayFood.id}>
                <p><strong>{todayFood.name}</strong> - {`${todayFood.calories} - cal`}</p>
              </div>
            )
            }
          )}
          <p className="foods__calories">Total calories:</p>
        </div>   

      </div>
    )
  }
}

export default FoodBox