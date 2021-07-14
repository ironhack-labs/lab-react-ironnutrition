import React, { Component } from 'react'

export default class Total extends Component {
    render() {
        const { list } = this.props
        let sum = list.reduce((acc, food) => {
            return acc + (food.quantity * food.calories)
        }, 0)
        return (
            <div className="box">
                <h1>Today's foods</h1>
                {
                list.map((food, i) => {
                    return  <div key={i}>
                    {food.quantity} {food.name} = {food.quantity * food.calories}
                </div>
                })
                }
            
                <h3>
                    Total {sum} cal
                </h3>

            </div>
        )
    }
}
