import React from 'react'

export default function TodaysFood(props) {

    return (     
        props.foodArray.map((food, index) => (
            <div key={index}>
                <h2>Name: {food.name}</h2>
                <p>Quantity: {food.quantity}</p>
                <p>Calories: {food.calories}</p>
                <button onClick={() => props.deleteFood(food.name)}>Delete {food.name}</button>
            </div>
        ))
    )
}
