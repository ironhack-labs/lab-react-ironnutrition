import React, { Component } from 'react'
import foods from '../foods.json'
// import FormFood from './FormFood'

class FoodBox extends Component {


    render() {

       
        return (
          <div className="box">
            
            
            
              
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={this.props.food.image} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{this.props.food.name}</strong> <br />
                        <small>{this.props.food.calories}cal</small>
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
    }
}

export default FoodBox
