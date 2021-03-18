import React, { Component } from 'react';
import foodsJSON from './../foods.json';

export class FoodBox extends Component {

// state = {
//     food: foodsJSON,
// isDisplayed: false
// }




    render() {
        return (
            <div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={this.props.foods.image} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{this.props.foods.name}</strong> <br />
                                    <small>{this.props.foods.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number"/>
                                </div>
                                <div className="control">
                                    <button className="button is-info">
                                        + </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default FoodBox;
