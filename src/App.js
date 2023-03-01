import React, { useState } from 'react';
import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row } from 'antd';
import Search from './components/Search';

function App() {
 const [food, setFoodList] = useState(foodsJson);
  const [showFood, setShowFood] = useState(foodsJson);

  const addFood = (newFood) => {
    const updatedFood = [newFood, ...food];
    setFoodList(updatedFood);
  };

  const searchFoods = (query) => {
    const filteredFoods = food.filter((food) =>
    food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFood(filteredFoods);
};

const deleteFood = (foodsName) => {
  const filteredFoods = food.filter((food) => {
    return food.name !== foodsName;
  });
  setShowFood(filteredFoods);
}
  return (
    <div className="App">
    <Search searchFoods={searchFoods}/>
      <div>
      <h2>Add a new Food</h2>
        <AddFoodForm addFood={addFood} />
        <h2>Food List</h2>
        <Row>
        {showFood.map((food, index) => (
          <FoodBox key={index} deleteFood={deleteFood} food={food} />
        ))} </Row>
      </div>
    </div>

  );
}

export default App;