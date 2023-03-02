import React from 'react';
import { useState } from 'react';
import foods from '../foods.json';

function FoodList() {
  const [food, setFood] = useState(foods);

  return food.map((dish) => {
    return (
      <div>
        <p>{dish.name}</p>
        <img src={dish.image} width= '100' alt="foodPicture" />
      </div>
    );
  });
}

export default FoodList;
