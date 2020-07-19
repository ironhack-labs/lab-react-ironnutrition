import React from 'react'

const TodaysFood = props => {

    let totalCalories = 0

    const listTodaysFood = [...props.ingredients].map(elem => {
        totalCalories += elem.calories
        return (
            <li key={elem.name}>{elem.quantity} {elem.name} = {elem.calories} cal</li>
        )
    })

    return (
        <div>
            <h1 className="title is-3">Today's Food</h1>
                {listTodaysFood}
            <h3>Total: {totalCalories} cal</h3>
        </div>
    )
}

export default TodaysFood
