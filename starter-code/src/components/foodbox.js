import React, { Component } from 'react';
import '../../node_modules/bulma/css/bulma.css'
import foods from '../foods.json'

class FoodBox extends Component {
    state = {
        foodShowing: foods
      }

      valueChange = (value) => {
          this.setState ({
              
          })
      }

    render () {
    return this.state.foodShowing.map((eachFood, index) => {
        return (
            <div class="columns">
                <div class="column">
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={eachFood.image} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{eachFood.name}</strong> 
                                        <br/>
                                        <small>{eachFood.calories} cal</small>
                                    </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                    <div className="control">
                                        <input className="input" type="number" value="1" />
                                    </div>
                                    <div className="control">
                                        <button className="button is-info"> + </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
      }
     )
  }

}

export default FoodBox