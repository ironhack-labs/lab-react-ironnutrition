import React, { Component } from 'react'
import 'bulma/css/bulma.css';


export default class FoodBox extends Component {

    state = {
        quantity: 0
    }

    addOneQuantity = event => {
        event.preventDefault() ;
        this.props.updateTodayFoodQuantity(event.target.name, this.state.quantity)
        this.setState({quantity: 0})
    }

    updateQuantity = event => {
        this.setState({quantity: Math.max(event.target.value, 0)})
    }
 
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
                    <small>{this.props.food.calories} cal</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <form 
                        className="control" 
                        name={this.props.food.name} 
                        onSubmit={this.addOneQuantity}
                    >
                        <div className="control">
                        <input 
                            className="input" 
                            type="number" 
                            value={this.state.quantity} 
                            onChange={this.updateQuantity}
                        />
                        </div>
                        <div>
                        <button className="button is-info">
                            +
                        </button>
                        </div>
                    </form>
                </div>
                </div>
            </article>
            </div>
        )
    }
}
