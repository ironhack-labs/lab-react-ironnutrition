import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import './App.css';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

function App() {
  const [foodData, setFoodData] = useState(foods);

  const handleAddFood = (newFood) => {
    setFoodData([...foodData, newFood]);
  };

  const handleDeleteFood = (foodId) => {
    const updatedFoodData = foodData.filter((food) => food.id !== foodId);
    setFoodData(updatedFoodData);
  };

  return (
    <div className="App">
      <Row>
        <Col>
          <Divider>Add Food Entry</Divider>
        </Col>
      </Row>

      <AddFoodForm onAddFood={handleAddFood} />

      <div className="food-list">
        {foodData.map((food) => (
          <FoodBox key={food.id} food={food} onDelete={handleDeleteFood} />
        ))}
      </div>
    </div>
  );
}

export default App;


