import React from 'react';

const TodaysFood = (props) => {
    let totalCalories = props.todaysFood.reduce((acc, elem) => {
        return acc + (elem.calories * elem.quantity)
    }, 0)
    return (
        <div className="column content">
            <h2 className="subtitle">Today's Food</h2>
            <ul>
                {props.todaysFood.map((food, i) => {
                    return (
                        <li key={i} >{food.quantity} {food.name} = {food.quantity * food.calories} cal
                        <button id="delete" onClick={()=> props.onDelete(i)}><img src="./trash.png" alt="Delete" /></button>
                        </li>
                    )
                })}
            </ul>
            <strong>Total: {totalCalories} cal</strong>
        </div>
        
    )
}

export default TodaysFood