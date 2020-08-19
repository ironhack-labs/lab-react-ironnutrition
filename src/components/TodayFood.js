import React from 'react'



function TodayFood(props) {
    return(
        <>
            <li>{props.todayFood.name} </li>
        </>
    )
}

export default TodayFood