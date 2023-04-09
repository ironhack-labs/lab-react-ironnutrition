import { useState } from 'react';
import FoodBox from './FoodBox';
import { Row } from 'antd';
import AddFoodForm from './AddFoodForm';

function FoodList({ allFoods }) {
  const [foods, setFoods] = useState(allFoods);

  const handleAddFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  return (
    <div className="container">
      <h1>Food List</h1>
      <AddFoodForm addFood={handleAddFood} />
      <Row>
        {foods.map((food) => (
          <FoodBox key={food.name} food={food} />
        ))}
      </Row>
    </div>
  );
}

export default FoodList;
