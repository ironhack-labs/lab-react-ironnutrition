import React from 'react';

function FoodCartList(props) {
  const { foodsSelection } = props;

  return (
    <div className="has-text-left content">
      <h1 className="title">Today's Foods</h1>
      <ul className="list">
        {foodsSelection.map((food, index) => {
          return (
            <li key={index} className="list-item">
              {food.quantity} {food.name} = {food.calories * food.quantity} kcal
            </li>
          );
        })}
      </ul>
      <p>
        Total:
        {foodsSelection.reduce(
          (val, current) => val + current.calories * current.quantity,
          0
        )}
        kcal
      </p>
    </div>
  );
}

export default FoodCartList;
