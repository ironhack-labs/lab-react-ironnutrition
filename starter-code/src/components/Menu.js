import React from 'react';

const Menu = (props) => {
    const totalCalories = props.menu.reduce((total, food) => total += food.quantity * food.calories,0)
    return (

        <div className="column is-half is-pulled-right">
            <h1 className="is-size-4">Today's foods</h1>
            <ul>
            {props.menu.map((food, index) => {
               return<li key={index} className="">{food.quantity} {food.name} = {food.quantity * food.calories} cal</li>
            })}
            </ul>
            <p className=""> Total calories: {totalCalories}</p>
        </div>

    )

}

export default Menu;