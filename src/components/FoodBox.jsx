import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export class FoodBox extends Component {

    state = {
        quantity: 0
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name] : value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addTodayFood({
            name: this.props.food.name,
            calories: this.props.food.calories,
            image: this.props.food.image,
            quantity: this.state.quantity
        })
    } 

    render() {
        const {food} = this.props;

        return (
            <div className="box">
                <div className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img alt="food" src={food.image} />
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
                    <form 
                        className="field has-addons"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="control">
                            <input 
                                onChange={this.handleChange}
                                className="input" 
                                type="number" 
                                value={this.state.quantity} 
                                name="quantity"
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                +
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodBox
