import { useState } from 'react';
import foodsJson from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

const FoodList = () => {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const deleteFood = (foodName) => {
    const updatedFoods = foods.filter((food) => food.name !== foodName);
    setFoods(updatedFoods);
  };

  return (
    <div>
      <h1>Food List</h1>
      <AddFoodForm onAddFood={addFood} />
      {foods.length > 0 ? (
        foods.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={deleteFood} />
        ))
      ) : (
        <p>Oops! There is no more content to show.</p>
      )}
    </div>
  );
};

export default FoodList;