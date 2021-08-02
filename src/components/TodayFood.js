import React from 'react'

function TodayFoods(props){
    const {food:{name, calories, quantity}} = props
    return(
        <div>
            <h3>Today's Foods</h3>
            <ul>
                <li>`${quantity}, ${name}, '=', ${calories}` </li>
            </ul>
        </div>
    )
}

export default TodayFoods;