import React from 'react'

function TodayFoods(props) {
    return (
        <div>
            <h2>Lista de Today</h2>
            <ul>
                <li>{props.foodie.name} - {props.foodie.quantity} - {props.foodie.calories}</li>

            </ul>
        </div>
    )
}

export default TodayFoods