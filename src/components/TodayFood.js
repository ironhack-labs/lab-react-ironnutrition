import React from 'react';

const TodayFood = ({ todayFood }) => {
  return (
    <>
      <h5 className="title is-5">Today's Food</h5>
      {todayFood.map(({ name, calories, quantity }) => (
        <li>
          {quantity} {name} : {quantity * calories}
        </li>
      ))}
      <h6 className="title is-6">Total Calories: {todayFood.reduce((acc, {calories, quantity}) =>  {return acc += (calories * quantity)}, 0)}</h6>
    </>
  );
};

export default TodayFood;
