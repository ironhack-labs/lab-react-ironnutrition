import React, { Component } from 'react';

import './FoodBox.css'

class FoodBox extends Component {
    state = {
        name: this.props.name,
        cal: this.props.calories,
        qty: this.props.quantity,
        total: 0
    }

    changeInput = (el) => {
        this.setState({
            qty: el.target.value 
        })
    }

    sendFood = () => {
        const foodInfo = {
            name: this.state.name,
            cal: this.state.cal,
            qty: this.state.qty
        }

        this.props.updateFoodList(foodInfo)
    }

    render() {
        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.name}</strong> <br />
                        <small>{this.props.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            className="input"
                            type="number" 
                            value={this.state.qty}
                            onChange = {this.changeInput}
                            min={0}
                        />
                        </div>
                        <div className="control">
                        <button className="button is-info" onClick={this.sendFood}>
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