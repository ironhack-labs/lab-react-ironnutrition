import React from 'react';

const FoodForm = () => {
  return (
    <form className="form">
      <input className="input" type="text" placeholder="food name" />
      <input className="input" type="number" placeholder="calories" />
      <input className="input" type="text" placeholder="image url" />
      <button className="button is-info">add now</button>
    </form>
  );
};

export default FoodForm;
