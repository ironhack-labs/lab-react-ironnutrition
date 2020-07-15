import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './FoodBox.css'

import foods from '../../foods.json'
import FoodForm from '../FoodForm/FoodForm'

class FoodBox extends Component {

    constructor() {
        super()
        this.state = {
            food: foods
        }
    }

    insertFood = newFood => {
        const foodCopy = [...this.state.food]
        foodCopy.push(newFood)
        this.setState({ food: foodCopy })
    }


    render() {

        return (
            <>
                <button className="button"><Link to="/foodform">Add a new food</Link></button>
                {this.state.food.map((elm, idx) => 
                    <div key={idx} className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                    <img src={elm.image} alt={elm.name}/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{elm.name}</strong> <br />
                                    <small>{elm.calories} cal</small>
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
                )}
                    <FoodForm insertFood={this.insertFood}/>
            </>
        )
    }
}

export default FoodBox
