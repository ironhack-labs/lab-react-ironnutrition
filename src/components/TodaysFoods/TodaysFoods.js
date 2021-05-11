import React, { Component } from 'react'

export default class TodaysFoods extends Component {


displayFood(){
   
    return this.props.patata.map(el=>{
        return (
            <div>
            <p>{el.name}</p>
            <p>{el.calories} cal</p>
            </div>
        )
    })
}
    getTotalCalories(){
    let caloriesSum = 0;
    this.props.patata.forEach(food => {
        caloriesSum += food.calories * food.quantity;
    }) 
    console.log(caloriesSum)
    return caloriesSum;
    }

    render() {

        return (
            <div>
              {this.displayFood()}              
              <p>Total {this.getTotalCalories()}</p>
            </div>
        )
    }
}
