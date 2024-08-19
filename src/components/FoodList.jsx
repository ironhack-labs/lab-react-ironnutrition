import { useState } from 'react';
import AddFoodForm from './AddFoodForm';
import FoodBox from './FoodBox';

function FoodList() {
  const [foods, setFoods] = useState([
    // Initial food items can be added here
  ]);

  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const deleteFood = (id) => {
    setFoods(foods.filter(food => food.id !== id));
  };

  return (
    <div>
      <AddFoodForm onAddFood={addFood} />
      <div className="food-list">
        {foods.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={deleteFood} />
        ))}
      </div>
    </div>
  );
}

export default FoodList;