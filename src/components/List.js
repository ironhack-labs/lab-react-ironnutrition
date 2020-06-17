import React from 'react';

export default function List(props) {
  return (
    <>
      <h2>Today's foods</h2>
      {props.list.map((food) => {
        return (
          <p>
            {food.quantity + food.name} = {food.calories * food.quantity}{' '}
            calories
          </p>
        );
      })
      }
      <p>
        Total:
        {props.list.reduce((acc, food) => {
          return (acc += food.calories * food.quantity);
        }, 0)}
        calories
      </p>
    </>
  );
}
