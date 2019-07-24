import React, { Component } from 'react';
import FoodCard from './FoodCard'

class FoodBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            foods: this.props,
            total: 0,
            calories: this.props.calories,
        }
        this.dailyCalories = this.dailyCalories.bind(this);
    }

    dailyCalories(teste) {
        this.setState({
            foods: teste
        })
    }

    render () {
        return(
        
            <div>
            { this.props.foods.map((el, idx) => {
            return <FoodCard key={idx} {...el} dailyCalories={this.dailyCalories()}/>
            })
            }
            <h3>Today's foods</h3>
                <ul>
                    <li>{this.state.quantity} {this.state.name} = {this.state.calories * this.state.quantity}</li>
                </ul>
                <p>Total: {this.state.total} cal</p>
    
            </div>
        )
    }
}

export default FoodBox;