import React from 'react';
import { Button } from '@material-ui/core' 
import './TotalContainer.css'

function TotalContainer({foods, onFoodDelete}) {

    let totalAmountOfCalories = foods.reduce((acc, cur) => {
        return acc + (cur.quantity * cur.calories);
    }, 0);

    return (
        <div>
            <h1>Today's foods</h1>
            <ul>
                {foods.map((food, index) => {
                    return (
                        <div key={index} className="food-item-calculation-container">
                            <li>{food.quantity} {food.name} = {food.calories * food.quantity} cal</li>
                            <Button onClick={() => onFoodDelete(index)}variant="contained" color="secondary">DELETE</Button> 
                        </div>
                    )
                })}
            </ul>
            <h3>Total: {totalAmountOfCalories} cal</h3>
        </div>
    )
}

export default TotalContainer;
