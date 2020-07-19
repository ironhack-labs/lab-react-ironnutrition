import React from 'react'

function TodayFoods({todayListFoods, totalCalories}) {
    return (
        <div className='column'>
            <p id='todays'>Today's foods</p>
            <ul>{todayListFoods}</ul>
            <p>Total: <b>{totalCalories} cal</b></p>
        </div>
    )
}

export default TodayFoods
