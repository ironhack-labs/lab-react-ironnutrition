import React from 'react'

const TodaysFoods = (props) => {
    return (
        <div>
                <h3>Today's food</h3>
                <ul>
                    {props.list.map((food,i) => 
                    <li key={i}>{food.quantity} {food.name} {food.calories * food.quantity}</li> 
                    )}
                </ul>
                <p>Total: {props.list.reduce((acc,food) => acc+food.quantity*food.calories,0)} calories</p>
            </div>
    )
}

export default TodaysFoods

