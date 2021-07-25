import React, { Component }  from 'react';

class TodaysFood extends Component {
    render() {
        const foodList = this.props.foodList
        let totalCalories = 0;
        function sumCalories() {
            foodList.forEach(element => {
                totalCalories += element.calories
            });
            return totalCalories
        }
        return (
            <>
            <h1>Today's Food</h1>
            <ul>
                {foodList.map((item, index) => (
                      <li key={index}>1 {item.name} = {item.calories} cal</li>
                    )
                )}
            </ul>
            <h1>Total: {sumCalories()} cal</h1>
            </>

        )
    }
}

export default TodaysFood;