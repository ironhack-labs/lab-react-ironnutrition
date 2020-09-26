import React, {useState} from 'react';
import './Summatory.css';

function Summatory(props) {
    const totalCalories = props.foods.reduce((acc, el) => acc + (el.calories * el.quantity), 0);
    const allFood = props.foods;
    
    return (
        <div className="Summatory column content">
            <h1>
                Today's Food
            </h1>
            <ul>
                {allFood.map(food => {
                     return <li>{food.quantity} {food.name} = {food.calories * food.quantity} <p className="delete" onClick={() => props.deleteFromMenu(food.name)}>x</p></li>
                })}
            </ul>
            <p>Total: {totalCalories} cals</p>
        </div>
    );
};

export default Summatory;