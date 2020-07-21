import React, { useState } from 'react'
import FoodBox from './FoodBox'
import TodaysFood from './TodaysFood'

export default function FoodCollection(props) {

    const displayFood = props.foodList
        .filter((food) =>
            food.name.toLowerCase().includes(props.searchParam)
        )
        .map((food, i) =>
            <FoodBox
                {...food} key={i} addTodaysFood={props.addTodaysFood} quantity={props.quantity}
            />);

    return (
        <div style={{ display: 'flex' }}>
            <div>{displayFood}</div>
            <div>

            </div>

        </div>
    )
}

