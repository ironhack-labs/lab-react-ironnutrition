import React, { Component } from 'react';
import foodsJSON from './../foods.json';

export class FoodBox extends Component {

// state = {
//     food: foodsJSON,
// }

handleDisplayForm = (event) => {
const value = event.target.value
};


    render() {
        return (
            <div>
                <button onClick={this.handleDisplayForm}>Create new nomnomfood</button>
                {this.props.foods.map((food, index) => 
                (
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
                                    <small>{food.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" value={food.quantity}/>
                                </div>
                                <div className="control">
                                    <button className="button is-info">
                                        + </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                )

                )}
            </div>
        )
    }
}

export default FoodBox;
