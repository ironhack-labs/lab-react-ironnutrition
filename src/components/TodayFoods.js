import React, { Component } from 'react'

export default class TodayFoods extends Component {

    getCaloriesSum(){
        let caloriesSum = 0;
       this.props.todaysfoods.forEach(food => {
           caloriesSum += food.calories*food.quantity
       })
       return caloriesSum
    }
    
    displayFood() {
        return this.props.todaysfoods.map((food) => {
          return (
              <div>
                <span>Food: {food.name} - </span>
                <span>Calories: {food.calories}</span>
              </div>
          );
        });
      };

    render() {
        return (
            <div>
              {this.displayFood()}
              <p>Total: {this.getCaloriesSum()}</p>
            </div>
        )
    }
}
