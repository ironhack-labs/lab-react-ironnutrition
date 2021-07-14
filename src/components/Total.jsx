import React, { Component } from 'react'

class Total extends Component {
    render() {
        const {foods} = this.props

        let sum = foods.reduce((acc, food) => {
            return acc + (food.quantity * food.calories)
        }, 0)

        return (
            <div>
                <h1>Today's foods</h1>
                    {
                        foods.map((food) => {
                            return (
                                <ul>
                                    <li>{`${food.quantity} ${food.name} = ${food.calories} cal`} </li>
                                </ul>
                            )
                        })
                    }

                    <h3><strong>Total: {sum} cal</strong></h3>
            </div>
        )
    }
}

export default Total;