import React from 'react';
import { FoodBox, TodayMenu } from '../components';

const FoodList = ({ foods = [], increaseQuantity, selection, addFood, removeFood }) => (
  <div className="food-list-container">
    <div className="food-list">
      {foods.map(food => (
        <FoodBox {...food} increaseQuantity={increaseQuantity} addFood={addFood} />
      ))}
    </div>
    <div className="today-food">
      <h1>Today's Food</h1>
      <TodayMenu selection={selection} removeFood={removeFood} />
    </div>
  </div>
);

export default FoodList;
