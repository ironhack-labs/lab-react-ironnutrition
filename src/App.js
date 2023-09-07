import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';

function App() {
  const [foodData, setFoodData] = useState(foods);
  const [foodDataMaster, setFoodMaster] = useState(foods);
  function addFood(newFood) {
    const updatedFoods = [...foodData, newFood];

    setFoodData(updatedFoods);
    setFoodMaster(updatedFoods);
  }
  return (
    <div className="App">
      <div>
        <AddFoodForm addFood={addFood} />
      </div>
      {foodData.map((food) => {
        return (
          <div>
            <FoodBox food={food} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
