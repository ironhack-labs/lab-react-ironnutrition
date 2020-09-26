import React from 'react';

import FoodBox from '../FoodBox/FoodBox';

export default class Food extends React.Component {
  render() {
    return (
      <div className="Food">
        {this.props.foodList.map((food, idx) => {
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
