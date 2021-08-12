import React, { Component } from 'react'
import 'bulma/css/bulma.css';

class FoodBox extends Component {
    state = {
        food: this.props.food,
    };

    handleFoodQuantity = (food) => {
        food.quantity = food.quantity + 1;
        this.setState({});
    }

    render() {
        return (<div className="box" key={this.state.food.name}>
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.state.food.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong key={this.state.food.name} >{this.state.food.name}</strong> <br />
                            <small key={this.state.food.calories}>{this.state.food.calories}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" onChange={() => this.handleFoodQuantity(this.state.food)} value={this.state.food.quantity} />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>);
    }
}


export default FoodBox;