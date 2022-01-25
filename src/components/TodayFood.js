import React from 'react';

const TodayFood = ({ todayFood, deleteTodayFood }) => {
  return (
    <>
      <h5 className="title is-5">Today's Food</h5>
      <ul className="today-org">
        {todayFood.map(({ name, calories, quantity }) => (
          <li key={name} className="today-li">
            <span>
              {quantity} {name} : {quantity * calories} cal
            </span>
            <button
              onClick={() => deleteTodayFood(name)}
              className="delete is-small"
            ></button>
          </li>
        ))}
      </ul>
      <h6 className="title is-6">
        Total Calories:{' '}
        {todayFood.reduce((acc, { calories, quantity }) => {
          return (acc += calories * quantity);
        }, 0)} {' '}
        cal
      </h6>
    </>
  );
};

export default TodayFood;
