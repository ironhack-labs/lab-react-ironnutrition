// src/components/FoodList.jsx
import  { useState } from 'react';
import foodsJson from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import { Row, Input } from 'antd';

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [searchTerm, setSearchTerm] = useState('');

  // Função para adicionar um novo item de comida
  const handleAddFood = (newFood) => {
    setFoods([
      ...foods,
      {
        id: Date.now().toString(),
        ...newFood,
      },
    ]);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Food List</h1>
      <AddFoodForm onAddFood={handleAddFood} />
      <Input
        placeholder="Search food"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 20, width: '300px' }}
      />
      <Row gutter={[16, 16]}>
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => <FoodBox key={food.id} food={food} />)
        ) : (
          <p>Oops! There is no more content to show.</p>
        )}
      </Row>
    </div>
  );
}

export default FoodList;
