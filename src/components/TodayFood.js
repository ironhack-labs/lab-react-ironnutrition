import React from 'react';

const TodayFood = ({foods, removeFood}) => {
    const onRemoveClick = (food) => () => {
        removeFood(food);
    }
    return (
        <div className="column content">
            <h2 className="subtitle">Today's foods</h2>
            <ul>
            {foods
                .filter((food) => food.quantity >0)
                .map((food) => (
                    <li key={food.id}>
                        {food.quantity} {food.name} = {food.quantity * food.calories}
                        <span className="ml2" onClick={onRemoveClick(food)}>🗑️</span>
                    </li>
                ))}    
            </ul>
            <strong>Total: {foods.reduce((acc, curr) => {
                return acc + curr.quantity * curr.calories
            },0)} cal
            </strong>
        </div>
    )
}

export default TodayFood