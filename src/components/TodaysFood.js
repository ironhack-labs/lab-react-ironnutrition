import React from 'react';

const TodaysFood = (props) => {
  const { name, calories, quantity, deleteFood } = props;

  return (
    <li>
      <p>
        {quantity} {name} = {calories} cal
      </p>
      <button className="button is-link" onClick={deleteFood}>
        Delete
      </button>
    </li>
  );
};

export default TodaysFood;
