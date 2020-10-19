import React from 'react';
import FoodBox from './FoodBox';

function FoodList(props) {
  return (
    <div>
      {/* Recebe o state do componente pai e pra cada objeto da lista, renderiza um Foodbox */}
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
