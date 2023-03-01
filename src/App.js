// src/App.js
import './App.css';
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showFoodList, setShowFoodList] = useState(foods);

  const addFood = (food) => {
    const foodListCopy = [...foodList, food];
    setFoodList(foodListCopy);
    setShowFoodList(foodListCopy);
  };

  const searchFood = (query) => {
    const filteredFoodList = foodList.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFoodList(filteredFoodList);
  };

  const deleteFood = (foodName) => {
    const filteredFoodList = foodList.filter((food) => {
      return food.name !== foodName;
    })
    setFoodList(filteredFoodList)
    setShowFoodList(filteredFoodList)
  }

  // After importing the components we can render them directly:
  return (
    <div>
      <AddFoodForm addFood={addFood} />
      <Search searchFood={searchFood} />
      {showFoodList.map((food) => {
        return <FoodBox food={food} deleteFood= {deleteFood}key={food.name} />;
      })}
    </div>
  );
}

export default App;
