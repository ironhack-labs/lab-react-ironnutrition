import React from 'react';

function Menu(props) {
  return (
    <div>
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {props.foods.map((food, index) => {
          return (
            <li key={`${food.name}-${index}`}>
              {food.quantity} {food.name} = {food.calories} cal
            </li>
          );
        })}
      </ul>
      <strong>Total: {} cal</strong>
    </div>
  );
}
export default Menu;
