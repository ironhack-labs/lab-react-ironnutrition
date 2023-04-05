import React, { useState } from 'react';
import foodsData from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
function App() {
  const [foods, setFoods] = useState(foodsData);

  return (
    <div>
      <h1>Food List</h1>

      {foods.map((food, index) => (
        <div>
          <h2 key={index}>{food.name}</h2>
          <img src={food.image} alt={food.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
