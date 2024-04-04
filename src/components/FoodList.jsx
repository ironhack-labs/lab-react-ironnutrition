import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './FoodBox';
import foodsJson from '../foods.json';
import AddFoodForm from './AddFoodForm';
import { Divider, Row, Typography } from 'antd';
import Search from './Search';


const { Text } = Typography;


function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreate = (newFood) => {
    setFoods([...foods, { ...newFood, id: uuidv4() }]);
  };

  const deleteFood = (id) => {
    const filteredFoods = foods.filter(food => food.id !== id);
    setFoods(filteredFoods);
  };

  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };

  // Filter foods based on the search term
  const filteredFoods = foods.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm handleCreate={handleCreate} />
      <Row style={{ width: "100%", justifyContent: "center" }}>
      <Divider>Search</Divider>

       <Search onSearchChange={handleSearchChange} />

      <Divider>Food List</Divider>
      {/* AAAND we render the filtered items */}
      {filteredFoods.length > 0 ? (
        <Row style={{ width: "100%", justifyContent: "center" }}>
          {filteredFoods.map((food) => (
            <FoodBox key={food.id} food={food} onDelete={() => deleteFood(food.id)} />
          ))}
        </Row>
      ) : (
        <Text type="secondary">Oops! There is no more content to show.</Text>
      )}

      </Row>
    </div>
  );
}

export default FoodList;
