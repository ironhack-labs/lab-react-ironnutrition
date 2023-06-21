// src/App.js
import './App.css';
import { Input, Card, Row, Divider, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import { deleteFood } from './component/FoodBox';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);
  const [filteredFood, setFilteredFood] = useState([]);

  const createFood = (newFood) => {
    const newList = [newFood, ...foodsToDisplay];

    setFoodsToDisplay(newList);
  };
  function deleteFood(name) {
    const newFoods = foods.filter((food) => food.name !== name);
    setFoodsToDisplay(newFoods);
  }
  return (
    <div className="App">
      <Divider>Add Food Entry</Divider>
      <AddFoodForm callBackToCreate={createFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsToDisplay.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={food}
              onDelete={() => deleteFood(food.name)}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
