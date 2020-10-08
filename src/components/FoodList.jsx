import React from 'react';
import FontAwesome from 'react-fontawesome';

import FoodBox from './FoodBox';

export default function FoodList(props) {
  return (
    <div>
      {props.foods.length !== 0 ? (
        props.foods?.map((food, index) => (
          <FoodBox
            key={`${food.name}-${index}`}
            food={food}
            addFoodMenu={props.addFoodMenu}
          />
        ))
      ) : (
        <div className="notification is-warning has-text-centered">
          <FontAwesome name="exclamation-triangle" className="mr-2" /> Opss!!
          Food not found, check search terms.
        </div>
      )}
    </div>
  );
}
