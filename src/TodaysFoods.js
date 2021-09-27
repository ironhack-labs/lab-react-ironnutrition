import React from 'react';

const TodaysFoods = (props) => {
  const foods = props.todaysFoods.map((food) => {
    return (
      <ul>
        <li>
          {food.name}x{food.quantity}
        </li>
        <li>{food.calories}</li>
      </ul>
    );
  });

  return (
    <div>
      <h3>Todays foods are:</h3>
      {foods}
    </div>
  );
};

export default TodaysFoods;
