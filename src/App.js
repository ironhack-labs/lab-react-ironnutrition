import './App.css';
import { Divider, Row, Button } from 'antd';
import foodList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import React, { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodList);

  const addFood = (food) => {
    setFoods((prev) => {
      const newFood = [food, ...prev];
      return newFood;
    });
  };
  const deleteFood = (foodName) => {
    const newList = foods.filter((food) => {
      return food.name !== foodName;
    });
    setFoods(newList);
  };

  return (
    <div className="App">
      <AddFoodForm createFunction={addFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => (
          <FoodBox
            callbackToDelete={deleteFood}
            food={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings,
            }}
          />
        ))}
      </Row>
    </div>
  );
}

export default App;
