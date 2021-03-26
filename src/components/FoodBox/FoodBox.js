import React, { Component } from 'react'
import './FoodBox.css'


class FoodBox extends Component {
    state = {
        name: this.props.name,
        image: this.props.image,
        calories: this.props.calories,
        quantity: 0
    }

    handleChange = (e) => {
        let value = e.target.value;
        this.setState({ quantity : value})
    }

    handleClick = () => {
        this.props.addFoodToday(this.state)
    }

    render() {
        return (
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
                                <input className="input" type="number" name="quantity" id="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.handleClick}>
                                    +
                                </button>
                            </div>
                    </div>
                </div>
            </article>
        )
    } 

}

export default FoodBox