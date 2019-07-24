import React, { Component } from 'react';

class FoodCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: '',
            calories: '',
        }
    }

    addCalories(event) {
        let newNumber = {
            name: this.props.name,
             quantity: parseInt(this.state.quantity)}
        this.props.dailyCalories(newNumber);
    }

    inputHandler(event) {
        let { name, value } = event.target;
        this.setState({
            [name]: parseInt(value),
        })
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
                        name="quantity"
                        value={this.state.quantity}
                        onChange={(e) => this.inputHandler(e)} 
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