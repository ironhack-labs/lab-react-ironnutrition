import React, { Component } from 'react'
import foods from '../foods.json'
// import FormFood from './FormFood'

class FoodBox extends Component {

    state = {
        foods: foods
    }

    render() {

       
        return (
          <div className="box">
            <button> Add New Food </button>
            
            {this.state.foods.map((food, i) => {
              return (
                <article key={i} className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={food.image} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories}cal</small>
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
              );
            })}
          </div>
        );
    }
}

export default FoodBox
