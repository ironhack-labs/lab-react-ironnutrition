import React from 'react';

const TodaysFoods = (props) => {
  const foods = props.todaysFoods.map((food) => {
    return (
      <ul key={food.name}>
        <li>
          {food.name} x {food.quantity}
        </li>
        <li>{food.calories}</li>
      </ul>
    );
  });

  return (
    <div>
      <h1>Todays foods are:</h1>
      {foods}
    </div>
  );
};

export default TodaysFoods;
