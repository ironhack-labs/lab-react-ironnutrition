import React, { Component } from 'react';

class FoodCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: '',
            calories: '',
        }
    }

    // addCalories(event) {
    //     let newNumber = parseInt(this.state.quantity) + 1
    //     this.props.addQuantity(newNumber);
    // }

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
                    <small>{this.props.calories}</small>
                    </p>
                </div>
                </div>
                <div className="media-right">
                <div className="field has-addons">
                    <div className="control">
                    <input
                        className="input"
                        type="number" 
                        value={this.props.quantity}
                    />
                    </div>
                    <div className="control">
                    <button className="button is-info" onClick={(e) => this.addCalories(e)}>+</button>
                    </div>
                </div>
                </div>
            </article>
        </div>
        )
    }
}

export default FoodCard