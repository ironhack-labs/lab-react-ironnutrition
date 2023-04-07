import React, { useState } from 'react';
import foodsJSON from './../foods.json';

function FoodList() {
    const [foods, setFoods] = useState(foodsJSON); // This is the array that will render and show the list of foods

    return (
        <div>
          {foods.map(food => (
            <div key={food.id}>
              <p>{food.name}</p>
              <img src={food.image} alt={food.name} width="100" />
            </div>
          ))}
        </div>
      );
    }
    
    export default FoodList;