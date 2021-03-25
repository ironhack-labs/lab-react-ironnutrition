import React from 'react';
import uuid from 'react-uuid';
import './TodaysFood.css';

const TodaysFood = ({ foods, handleClickRemove }) => {
  let filteredFood = foods.filter((food) => {
    return food.added === true;
  });

  let totalCal;

  if (filteredFood.length > 0) {
    totalCal = filteredFood.reduce(
      (acc, val) => val.calories * val.quantity + acc,
      0
    );
  } else {
    totalCal = 0;
  }

  return (
    <div className="TodaysFood">
      <h1>Today's food</h1>
      {filteredFood.map((food) => {
        return (
          <div className="info-wrapper" key={uuid()}>
            <h2>
              {food.quantity} {food.name} = {food.quantity * food.calories}
            </h2>
            <div
              className="trashIcon"
              onClick={() => handleClickRemove(food.name)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </div>
          </div>
        );
      })}
      <h1>
        Total Calories: <b>{totalCal}</b>
      </h1>
    </div>
  );
};

export default TodaysFood;
