import React from 'react';

const Menu = (props) => {
  const totalCalories = props.foods.reduce(
    (acc, curr) => acc + curr.calories * curr.quantity,
    0
  );
  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {props.foods.map((el, i) => (
          <li key={i}>
            {el.quantity} {el.name} = {el.calories * el.quantity} cal 
          </li>
        ))}
      </ul>
      <strong>Total: {totalCalories} cal</strong>
    </div>
  );
};

export default Menu;
