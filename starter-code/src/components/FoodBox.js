import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class FoodBox extends Component {

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt=""/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.food.name}</strong> <br />
                                <small>{this.props.food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    value={this.props.food.quantity}
                                    onChange={(e) => this.props.handleQuantity(e, this.props.food.name)}
                                />
                            </div>
                            <div className="control">
                                <button 
                                className="button is-info"
                                onClick={(e) => this.props.handleCaloriesQuantity(e, this.props.food.name)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                </article>
            </div>
        )
    }
}

export default FoodBox;