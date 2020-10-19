import React from 'react';

function CalorieTracker(props) {
  return (
    <div>
      <h1>Today's foods</h1>

      <ul>
        {props.foods.map((food, i) => {
          return (
            <li key={i}>
              {`${food.quantity} ${food.name} = ${
                food.calories * food.quantity
              } cal`}
            </li>
          );
        })}
      </ul>

      <p>Total: {props.calories}</p>
    </div>
  );
}

export default CalorieTracker;
