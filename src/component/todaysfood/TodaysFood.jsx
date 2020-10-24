import React from 'react'

export default function TodaysFood(props) {

    return (
        <div className="content">
            

                <li>{props.food.quantity} {props.food.name} {props.food.calories * props.food.quantity} cal.</li>
    
        </div>
    )
}
