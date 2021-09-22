import React, { Component } from "react";
import './FoodBox.css'

class FoodBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.food.name,
            calories: this.props.food.calories,
            image: this.props.food.image,
            quantity: this.props.food.quantity
        }
    }

    counter = () => {
        this.setState({
            ...this.state,
            quantity: this.state.quantity + 1
        })
    }

    handleClick = () => {
        this.props.showFood(this.state)
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt="food"/>
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
                                <input className="input" onClick={() => this.counter()} type="number" value={this.state.quantity} />
                            </div>
                            <div className="control">
                                <button onClick={()=>this.handleClick()} className="button is-info">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default FoodBox;