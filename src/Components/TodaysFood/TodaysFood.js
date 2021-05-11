import React from 'react'

export default function TodaysFood(props) {
    const{ todaysFoods } = props;
    let id = 1;

    return (
        <div>
            <h1>Today's Food</h1>
            <ul>
            { todaysFoods.map((food) => <li key={ id++ } >{`${food.count} ${food.name} ${food.calories*food.count}`}</li>) }
            </ul>
            <p> {`Total: ${todaysFoods.reduce((acc, el) =>  acc += (el.calories * el.count),0)} cal`}</p>
        </div>
    )
}
