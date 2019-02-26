import React from 'react';

export default ({ foods }) => {

  const list = foods.filter(f => f.quantity > 0).map(f => (
    <li key={f.name}>{f.quantity} {f.name} = {f.quantity * f.calories} cal</li>
  ));
  const total= foods.reduce((acc, f) => f.quantity * f.calories + acc, 0);

  return (
    <div>
      <h1>Today's food</h1>
      <ul>{list}</ul>
      Total: {total} cal
    </div>
  )
};