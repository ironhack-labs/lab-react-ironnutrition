import React from 'react';

function TodayList(props) {
  let sumCalories = props.todaysFoods.reduce((total, currentValue) => {
    return total + currentValue.calories;
  }, 0);
  console.log(sumCalories);

  return (
    <div>
      <h2>Today's foods</h2>
      <ul>
        {props.todaysFoods.map((food) => {
          return (
            <li>
              {food.quantity} {food.name} = {food.calories} cal
            <button onClick={props.clickToDelete(food.name)}>Delete</button></li>
          );
        })}
      </ul>
      <p>Total: {sumCalories} cal</p>
    </div>
  );
}

export default TodayList;
