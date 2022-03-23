import React from 'react';

export const TodaysFood = ({ foodsSelection }) => {
  return (
    <>
      <ul style={{ marginTop: '20px' }}>
        {foodsSelection.map((food, index) => {
          return (
            <li key={index}>
              {food.quantity}x {food.name} <br />
              <i>
                {food.calories * food.quantity}
                cal
              </i>
              <hr />
            </li>
          );
        })}
      </ul>
      <p>
        <strong>
          Total:
          <br />
          {foodsSelection.reduce(
            (val, curr) => val + curr.calories * curr.quantity,
            0
          )}
          cal
        </strong>
      </p>
    </>
  );
};
