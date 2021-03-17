import React, { Component } from 'react'

export class TodayFood extends Component {

    
    render() {
        const calorieSum = this.props.todayFoods.reduce((a, b) => a + (b.calories*b.quantity),0)
        return (
          <div>
            <ul>
              {this.props.todayFoods.map((food, index) => (
                <li key={index}>
                  {food.quantity} {food.name} = {food.calories*food.quantity} cal
                </li>
              ))}
            </ul>
            <h3>Total: {calorieSum} calories</h3>
          </div>
        );
    }
}

export default TodayFood
