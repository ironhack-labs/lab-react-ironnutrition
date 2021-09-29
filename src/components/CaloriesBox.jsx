import React from 'react';

const CaloriesBox = (props) => {
  return (
    <div className="box">
      <p>
        {props.food.quantity + ' x '}
        {props.food.name}
      </p>
      <p>{props.food.calories * props.food.quantity + ' calories'}</p>
    </div>
  );
};

export default CaloriesBox;
