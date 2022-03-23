import React from 'react';

export const TodaysFood = ({ foodsSelection, deleteFood }) => {
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
              <button
                className="button is-danger is-outlined"
                style={{
                  width: '10px',
                  height: '20px',
                  margin: '4px 0 0 30px',
                }}
                onClick={() => deleteFood(food.name)}
              >
                Del
              </button>
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
