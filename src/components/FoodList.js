import React from 'react'

const FoodList = (props) => {
    return (
        <div>
            <h2 className="subtitle">Today's foods</h2>
            <ul>
                {props.list.map((food, index) =>
                    <li key={index}>{food.quantity} {food.name} = {food.calories} cal</li>
                )}
            </ul>
            <strong>Total: {props.list.map(ele => ele.quantity * ele.calories).reduce((a, b) => a + b, 0)} cal</strong>
        </div>
    );
};

export default FoodList;

