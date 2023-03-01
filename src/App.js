// src/App.js
import './App.css';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodList from './components/FoodList';
import FoodBox from './components/FoodBox';

function App() {
  const [food, setFood] = useState(foods);
  // After importing the components we can render them directly:
  return (
    <div>
      {food.map((food) => {
        return <FoodBox food={food} key={food.name} />;
      })}
    </div>
  );
}

export default App;
