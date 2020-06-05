import React, { Component } from 'react';
import 'bulma/css/bulma.css';


class FoodBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        };
    }
    changeQuantityHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            quantity: currentInputValue
        })
    }
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt="food" />
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
                                <input className="input" type="number" value={this.state.quantity} onChange={this.changeQuantityHandler}/>
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
    }
}
export default FoodBox;
