import React, { Component } from 'react'

export default class FoodList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    totalCalories = () => {
        return this.state.list.reduce((a, b) => a.calories + b.calories);
    }

    render() {
        return (
            <div>
                <h2 className="subtitle">Today's foods</h2>
                <ul>
                    {this.state.list.map(food =>
                        <li>{food.quantity} {food.name} = {food.calories} ca;</li>
                    )}
                </ul>
                <strong>Total: {this.totalCalories} cal</strong>
            </div>
        )
    }
}
