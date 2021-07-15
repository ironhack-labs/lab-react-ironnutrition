import React, { Component } from 'react'

class Total extends Component {
    render() {
        const {total} = this.props
        return (
            <div>
                <h1>Today's Food</h1>
                <ol>
                 {
                     total.map((food) => {
                         return (
                             <li>{food.quantity} {food.name} = {food.quantity * food.calories} cal</li>
                         )
                     })
                 }
                </ol>
                {
                    total.reduce((acc, food) => {
                        return <h4>Total: {acc + (food.quantity * food.calories)} cal</h4>
                    }, 0)
                }
            </div>
        )
    }
}

export default Total