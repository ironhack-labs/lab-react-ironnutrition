import React from 'react'

export default function TodayFoods(props) {
    return (

        <>
            <h1>Today's Foods</h1>
            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}>1 x {item.name} = {item.calories} cals</li>
                })}
            </ul>
            <p>Total: {props.items.reduce((sum, item) => {return sum += item.calories}, 0)} cals</p>
        </>

    );
}