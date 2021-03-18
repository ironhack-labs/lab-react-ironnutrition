import React, { Component } from 'react'
import 'bulma/css/bulma.css'


export class FoodBox extends Component {
    
    state = {
        quantity: 0,
        isClicked: false
    }

    changeQuantity = (event) => {
        this.setState({quantity: event.target.value})
        this.props.addQuantity(this.props.foodElement.name, this.state.quantity)
    }

    addTodayFood = () => {
        if (!this.state.isClicked) {
            this.setState({isClicked: true})
            this.props.addToList(
                {   
                    name: this.props.foodElement.name,
                    calories: this.props.foodElement.calories,
                    quantity: this.props.foodElement.quantity
                }
            )
        }
        
    }
    
    
    render() {
        const {name, calories, image, quantity} = this.props.foodElement;
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{name}</strong> <br />
                        <small>{calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" value={this.state.quantity }onChange={this.changeQuantity} />
                        </div>
                        <div className="control">
                        <button onClick={this.addTodayFood} className="button is-info">
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

export default FoodBox
