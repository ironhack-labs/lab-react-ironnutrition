import { useState } from 'react';
import foodsDataFromJSON from '../foods.json';
import FoodBox from './FoodBox';

const foodsCopy = [...foodsDataFromJSON];

function FoodList() {
  const [foods, setFoods] = useState(foodsCopy);

  console.log(foods.length);

  return (
    <div className="FoodList">
      {foods.map((food) => (
        <FoodBox
          key={food.name}
          name={food.name}
          calories={food.calories}
          image={food.image}
          quantity={food.quantity}
        />
      ))}
    </div>
  );
}

export default FoodList;
