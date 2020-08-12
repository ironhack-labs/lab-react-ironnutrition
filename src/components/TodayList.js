/* import React, { Component } from 'react'

class TodayList extends Component {
    state = {
        todayFood: 0
    }
    
    todayList = ({e}) => {
        const newFood = this.state.filtered.map(food => food.name === e.target.name ? ({...food, quantity: food.quantity + 1}) : food)
        this.setState({
            filtered: newFood 
        })
    }
    
    render() {
        return (
            <div>
                <h2>Today's foods</h2>
                <ul>
                    <li>{this.todayList}</li>
                </ul>
                <p>Total: {totalCalories} cal</p>

            </div>
        )
    }

}

export default TodayList */
