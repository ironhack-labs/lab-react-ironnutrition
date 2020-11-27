import React, { Component } from 'react';

class FoodBox extends Component {
    state = {
        quantity: 1,
    }

    quantityChangeHandler = (event) => {
        let inputValue = event.target.value;
        const stateCopy = {quantity: inputValue};

        this.setState(stateCopy)
    }

    render(){
        return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img src={this.props.image} alt="food" />
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
                    <input className="input" type="number" value={this.state.quantity} onChange={this.quantityChangeHandler} />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={() => {
                        this.props.handleAddFood({
                            name: this.props.name,
                            calories: this.props.calories,
                            quantity: this.state.quantity
                        })
                    }}>
                    +</button>
                    </div>
                </div>
                </div>
            </article>
        </div>
        )
    }
}

export default FoodBox;