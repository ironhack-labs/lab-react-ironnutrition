import React, { Component } from 'react';

export default class TodayFood extends Component {

    render() {
        const {totalCal} = this.props;
        return (
            <div>
                <h2>Today's Foods</h2>
                <ul>
                {
                    this.props.foodList.map((food, i) => (
                        <li key={i}>{food.quantity} {food.name} = {food.calories * food.quantity} cal</li>
                    ))
                }
                </ul>
                <p>Total: {totalCal} cal</p>
            </div>
        )
    }
}
