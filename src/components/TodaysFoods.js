import React from 'react';

function TodaysFoods(props) {
  let caloriesArray = props.todaysFoodArray.map((item) => {
    return item.calories * item.quantity;
  });
  let totalCalories = 0;
  caloriesArray.forEach((item) => {
    totalCalories += item;
  });

  return (
    <div>
      <h1>
        <strong>Today's Foods</strong>
      </h1>
      <ul>
        {props.todaysFoodArray.map((item) => {
          return (
            <li key={item.name}>
              <p>
                {item.quantity} {item.name} = {item.calories * item.quantity}{' '}
                calories
              </p>
              <button
                onClick={() => {
                  props.delete(item.name);
                }}
              >
                trash
              </button>
            </li>
          );
        })}
      </ul>

      <p>Today you have eaten: {totalCalories} calories</p>
    </div>
  );
}

export default TodaysFoods;
