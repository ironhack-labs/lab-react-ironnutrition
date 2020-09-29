import React, { Component } from 'react'

export default class FoodList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list,
            totalCalories: props.list.map(ele => ele.quantity * ele.calories).reduce((a, b) => a + b)
        }
    }

    totalCalories = () => {
        return this.state.list.map(ele => ele.calories).reduce((a, b) => a + b);
    }

    render() {
        return (
            <div>
                <h2 className="subtitle">Today's foods</h2>
                <ul>
                    {this.state.list.map((food, index) =>
                        <li key={index}>{food.quantity} {food.name} = {food.calories} cal</li>
                    )}
                </ul>
                <strong>Total: {this.state.totalCalories} cal</strong>
            </div>
        )
    }
}
