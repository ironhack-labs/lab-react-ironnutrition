import React from 'react';

function TodayFoods(props) {
  const foods = props.foodsToday;
  let calories = 0;
  calories = foods.reduce((acc, cur) => {
    return acc + cur.calories * cur.quantityToAdd;
  }, 0);

  return (
    <div>
      <h3>Today's foods:</h3>
      <ul>
        {foods.map((food) => {
          return (
            <li key={food.name}>
              {food.name}
              {food.quantityToAdd} = {food.calories * food.quantityToAdd} cal
            </li>
          );
        })}
      </ul>
      <h3>Total calories: {calories} </h3>
    </div>
  );
}

export default TodayFoods;
