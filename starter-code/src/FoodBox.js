import React, { Component } from 'react';
import foods from './foods.json';

export default class FoodBox extends Component {

    constructor() {
        super();
        this.state = {food: foods}
    }


    render() {
        return (


            <div className="section">
                {this.state.food.map((oneFood, index) => {
                    return (

                
                
                <div className="container box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={oneFood.image} alt="foodbild" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{oneFood.name}</strong> <br />
                                    <small>{oneFood.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input
                                        className="input"
                                        type="number"
                                        value={oneFood.quantity}
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
                 )})}
            </div>
        )
    }
}
