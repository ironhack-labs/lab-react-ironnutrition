import React from 'react';

const TodayMenu = ({ selection = [], removeFood }) => {
  const totalCalories = selection.reduce((acc, food) => (acc += food.quantity * Number(food.calories)), 0);
  return (
    <>
      <ul>
        {selection.map(({ name, quantity, calories }) => (
          <li>
            <span>
              {quantity} {name} = {quantity * Number(calories)} calories
            </span>
            <button onClick={removeFood && removeFood(name)}>X</button>
          </li>
        ))}
      </ul>
      <div>
        <h1>Total: {totalCalories}</h1>
      </div>
    </>
  );
};

export default TodayMenu;
