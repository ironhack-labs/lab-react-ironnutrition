import React, { Component } from "react";
import TodaysFood from './TodaysFood';

class FoodBox extends Component {
  render() {
    const { todaysFood, foods, handleQuantity } = this.props
    return (
      <div className="main-div">
        { foods.map((food, index) => {
          return (
            <div key={index} className="box">
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
                        value={ food.quantity }
                        onChange={ handleQuantity }
                      />
                    </div>
                    <div className="control">
                      <button className="button is-info" onClick={ () => 
                        this.props.addTodaysFoodHandler(food)}>+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
        <div className='todays-foods'>
            <h1>Today's Foods</h1>
            { todaysFood.map((eachFood, index) => { 
                return <TodaysFood key={index} {...eachFood} />
            }) }
        </div>
      </div>
    );
  }
}

export default FoodBox;