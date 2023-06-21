import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import logo from './logo.svg';
import foods from './foods.json';
import './App.css';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  const createFood = (newFood) => {
    const newList = [newFood, ...foodsToDisplay];
    setFoodsToDisplay(newList);
  }

return (
  <div className="App">
    <Divider>Food List</Divider>
    <Row gutter={[16, 16]} justify="center">
      {foodsToDisplay.map((foodObj, index) => (
        <FoodBox key={index} foodDetails={foodObj} />
      ))}
    </Row>

    <AddFoodForm callBackToCreate = {createFood} />
  </div>
);
}

export default App;
