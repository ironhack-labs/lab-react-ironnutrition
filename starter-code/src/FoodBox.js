import React, { Component } from "react";
import foods from './foods.json'

class FoodList extends Component {
  state = {
    foods: foods
  }

  showFoods = () => {
    let list = this.state.foods.map((food,i) => {
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
                <small>400 cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number" 
                  value="1"
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      )
  }) 
  return list;
}

  render() {
  return (
    <div className="FoodList">
      {this.showFoods()}
    </div>
  )
}
}

export default FoodList;
