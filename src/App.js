// src/App.js
import './App.css';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsDataJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsDataJSON);
  const [foodsCopy] = useState(foodsDataJSON);

  const AddNewFood = (newFood) => {
    const updatedList = [...foods, newFood];
    setFoods(updatedList);
  };

  const showFilteredFoods = (search) => {
    const filteredList = foodsCopy.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });
    setFoods(filteredList);
  };

  const deleteFood = (foodName) => {
    const arrayWithoutFood = foods.filter((food) => {
      return food.name !== foodName;
    });

    setFoods(arrayWithoutFood);
  };

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <AddFoodForm AddNewFood={AddNewFood} />

      <Divider>Search for a food</Divider>
      <Search showFilteredFoods={showFilteredFoods} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return <FoodBox food={food} deleteFood={deleteFood} />;
        })}
      </Row>
    </div>
  );
}
export default App;
