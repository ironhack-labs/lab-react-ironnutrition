import React from 'react';

const TodayFood = ({ todayFood }) => {
  return (
    <>
      <h5 className="title is-5">Today's Food</h5>
      {todayFood.map((food) => (<li> {food.name}</li>))}
    </>
     
  );
};

export default TodayFood;
