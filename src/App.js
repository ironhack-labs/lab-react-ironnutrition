// src/App.js
import './App.css';

import { useState } from 'react';

import foods from './foods.json';

import Foodbox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

import { Row, Divider } from 'antd';

function App() {
  const [foodsArray, setFoodsArray] = useState(foods);

  const addFood = (newFood) => {
    setFoodsArray((prevFoodArray) => {
      return [newFood, ...prevFoodArray];
    });
  }

  return (
    <div className="App">
      <Divider>Add Food Entry</Divider>

      <AddFoodForm callbackNewFood={addFood}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsArray.map((foodObj, index) => {
          return <Foodbox key={index} foodItem={foodObj} />;
        })}
      </Row>
    </div>
  );
}
export default App;
