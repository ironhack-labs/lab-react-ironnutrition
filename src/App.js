import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddForm';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  const createFood = (newFood) => {
    // new list = an array with the new food + all the food we had before
    const newList = [newFood, ...foodsToDisplay];

    // update state
    setFoodsToDisplay(newList);
  };

  return (
    <div className="App">
      <header>
        <AddFoodForm callbackToCreate={createFood} />
      </header>
      <Divider>Food List</Divider>
      {foodsToDisplay.map((foodObj, index) => {
        return (
            <div>
              <FoodBox foodDetails={foodObj} />
            </div>
        );
      })}
    </div>
  );
}
export default App;
