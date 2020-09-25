import React from 'react';
import FoodBox from './FoodBox';
import './Food.css';

const Foods = (props) => {
  return (
    <div className="Food">
      {props.foods.map((food, i) => {
        return (
          <FoodBox
            changeQuantity={props.changeQuantity}
            quantity={props.quantity}
            add={props.add}
            key={i}
            name={food.name}
            calories={food.calories}
            image={food.image}
          />
        );
      })}
    </div>
  );
};

export default Foods;
