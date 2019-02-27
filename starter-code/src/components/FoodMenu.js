import React from 'react';

export default ({ foods }) => {

  const calories = foods.reduce((acc, f) => f.quantity * f.calories + acc, 0);

  const menuList = foods.filter(f => f.quantity > 0).map(f => (
    <li key={f.name}>{f.quantity} {f.name} = {f.quantity * f.calories} kcal</li>
  ));
  
  return (
    <div className='FoodMenu'>
      <h1>Today's food</h1>
      <ul>{menuList}</ul>

      Total: {calories} kcal
    </div>
  )
}