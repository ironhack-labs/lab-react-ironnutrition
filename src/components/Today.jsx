import React, { Component } from 'react'

export default class Today extends Component {
    sum=0
    render() {
        return (
            <div>
                <h2>Today's Food</h2>
                
                <div>{this.props.meals.map((meal, index)=>{
                    console.log(meal)
                    this.sum+=meal.quantity*meal.calories
                    return  <div key={index}>{meal.quantity} {meal.meal} for {meal.quantity*meal.calories} calories</div>
                })}
                </div>
                <div>{this.sum} calories in total for the whole day</div>
                {/* <p>I ate {this.props.quantity} {this.props.meal} for a total of calories of {this.props.calories}</p> */}
            </div>
        )
    }
}
