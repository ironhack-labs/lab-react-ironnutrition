import React from 'react';

function ConsumedFoods(props) {
  return (
    <div>
      <h1 className="title is-3">Today's Foods</h1>
      <ul>
        {props.todaysFoods.map((food, i) => (
          <li key={i}>
            {food.quantity} {food.name} = {food.calories * food.quantity} cal
          </li>
        ))}
      </ul>

      <p>
        Total:
        {` ${props.todaysFoods.reduce((acc, food) => {
          return acc + food.calories * food.quantity;
        }, 0)} cal`}
      </p>
    </div>
  );
}

export default ConsumedFoods;
