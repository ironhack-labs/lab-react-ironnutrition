import React from 'react'

export default function TodayFood(props) {

    const renderList = props.list.map(food => {
        if (food.quantity) {
            const totalCalories = food.calories * food.quantity
            return (
                <div className="is-flex columns" key={"today list" + food.name}>
                    <p className="column is-italic has-text-weight-bold">{food.name}</p>
                    <p className="column has-text-weight-bold">Calories: <span className="has-text-weight-normal">{totalCalories}</span></p>
                    <p className="column has-text-weight-bold">Quantity: <span className="has-text-weight-normal">{food.quantity}</span></p>
                </div>
            )
        }
    })

    return (
        <div className="box">
            <h3 className="title">Today's foods</h3>
            {renderList}
        </div>
    )
}