import React from 'react';
import FoodBox from './FoodBox';

function FoodList(props) {
  return (
    <div>
      {props.foodList.map((food, i) => {
        return (
          <FoodBox
            key={i}
            name={food.name}
            calories={food.calories}
            quantity={food.quantity}
            image={food.image}
            addFood={props.addFood}
          />
        );
      })}
    </div>
  );
}

export default FoodList;