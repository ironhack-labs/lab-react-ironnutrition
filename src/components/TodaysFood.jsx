import React from 'react'

export default function TodaysFood(props) {
    var totalCalories = 0
    console.log('TODAYS FOOD: ', props)

    const todaysFoodList = [...props.todaysFood].map(elem => {
        totalCalories += elem.calories * elem.quantity
        return (
            <p key={elem.name}>
                {elem.quantity} x {elem.name} = {elem.calories * elem.quantity} kcal
            </p>
        )
    })
    return (
        <div>
            <label>Today's Food</label>
            <br />
            {todaysFoodList}

            <label>Total Calories: {totalCalories}</label>
        </div>
    )
}
