import React from 'react';
import foods from '../../foods.json';
import FoodBox from '../FoodBox/FoodBox';

export default class Food extends React.Component {
  render() {
    return (
      <div className="Food">
        {foods.map((food, idx) => {
          return (
            <FoodBox
              key={idx}
              name={food.name}
              calories={food.calories}
              image={food.image}
            />
          );
        })}
      </div>
    );
  }
}
