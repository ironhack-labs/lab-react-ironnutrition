import React, { Component } from 'react'
import JSONfoods from './../foods.json';

class FoodBox extends Component {

    state = {
        food: JSONfoods
    }

    render() {
        return (
            <div>
                {this.state.food.map((foodProduct) =>
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={foodProduct.image} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{foodProduct.name}</strong> <br />
                                        <small>{foodProduct.calories} cal</small>
                                    </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                    <div className="control">
                                        <input className="input" type="number" value={foodProduct.quantity} />
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
                )}
            </div>
        )
    }
}

export default FoodBox
