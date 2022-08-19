import React from 'react';

import FoodBox from './FoodBox';

function FoodList(props) {
  const { deleteFood } = props;
  return (
    <div>
      {props.foods.map((food) => {
        return (
          <div>
            <FoodBox food={food} deleteFood={deleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default FoodList;