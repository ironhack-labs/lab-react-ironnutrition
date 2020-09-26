import React from 'react';

const Menu = (props) => {
    const totalCalories = props.foods.reduce((acc, cur) => acc + (cur.calories * cur.quantity) , 0)

    return (
        <div>
            <h2 className="subtitle">Today's foods</h2>
            <ul>
                {props.foods.map(food => (
                    <li>
                        {food.name} = {food.calories} * {food.quantity} cal
                        <button className="button ml-3" onClick={() => props.deleteFromMenu(food)}>Delete</button>
                    </li>
                ))
                }
            </ul>
            <strong>Total: {totalCalories} cal</strong>
        </div>
    )
}

export default Menu