import React from 'react';

const TodaysFood = ({foods}) => {
    
    let filteredFood = foods.filter(food => {
        return food.added === true
    })
    

    let totalCal;

    if (filteredFood.length > 0) {
        totalCal = filteredFood.reduce((acc, val) => val.calories * val.quantity + acc, 0)
    } else {
        totalCal = 0;
    }

    return (
        <div>
        <div>Total Calories: <b>{totalCal}</b></div>
        {
            filteredFood.map(food => {
                return (
                <div>
                    <h1>{food.name}</h1>
                    <h2>{food.calories}</h2>
                </div>
                )
            })
        }
        </div>
    )
}

export default TodaysFood;