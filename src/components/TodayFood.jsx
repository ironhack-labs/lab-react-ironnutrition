import React, { Component } from 'react'

export default class TodayFood extends Component {
    render() {
        return (
            <div>
                <div className="column content">
                <h2 className="subtitle">Today's foods</h2>
                <ul>
                    {
                        this.props.foods.map(
                            (food,index) => food.quantity > 0 ?
                                <div className="chooseFood" key={index}>
                                    <div>{food.quantity} {food.name} = {food.quantity*food.calories} cal</div>
                                    <button className="button is-info" onClick={() => this.props.updateTodayFoodQuantity(food.name, 0)}>-</button></div> :
                                ""
                        )
                    }
                </ul>
                <strong>Total: {this.props.foods.reduce((acc, curr) => acc+Number(curr.quantity)*Number(curr.calories),0)} cal</strong>
                </div>
            </div>
        )
    }
}
