import React from 'react';
import Food from './Food.js'
const FoodBox = (props) => {

  const food = () => {
    return props.foods.map((e, i) => {
      return <Food key={i} {...e} />
    })
  };

    return (
      <div>
        {food()}
      </div>
    );
}

export default FoodBox;
