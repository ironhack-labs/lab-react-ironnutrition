import React from 'react'

function TodaysFood(props) {
    const totalCal = props.foodList.reduce((a,v) => {
        a += v.calories * v.quantity
        return a
    }, 0)

    return (
        <div>
            <h2 className='subtitle'>Today's food</h2>
            <ul>
                {props.foodList.map((f, i) => <li key={i}>{f.quantity} {f.name} = {+f.quantity * +f.calories} cal </li>)}
            </ul>
            <div style={{fontWeight: 800}} className="total">Total : {totalCal} cal</div>
        </div>
    )
}

export default TodaysFood
