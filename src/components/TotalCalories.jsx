import React from 'react'


export default function TotalCalories(props) {
    const foods = props.foodsMenu
    const caloriesTotal = foods.reduce((acc, el) => acc + (el.calories * el.quantity), 0)

    return (
        <div>
            <hr />
            <strong>Total: {caloriesTotal} cal</strong>
        </div>
    )
}
