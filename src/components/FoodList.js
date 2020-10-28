import React, { Component } from 'react'
import FoodBox from './FoodBox'

export default class FoodList extends Component {
    render() {
        const {food} = this.props
        return (
            <div>
                {
                    food.map((dish, i) => {
                    return <FoodBox
                    key={i}
                    eachDish = {dish}
                    onAddToday = {this.props.onAddToday}
                        />
                    })
                }
                
            </div>
        )
    }
}
