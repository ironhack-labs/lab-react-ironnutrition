import { useState } from 'react';
import foods from './foods.json';
import './App.css';
//import { Card, Row, Col, Divider, Input, Button } from "antd"
import { Divider, Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  const addFoodie = (newFoodie) => {
    const newList = [newFoodie, ...foodsToDisplay];
    setFoodsToDisplay(newList);
  };
  return (
    <div className="App">
      <AddFoodForm callbackAdd={addFoodie} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsToDisplay.map((foodie, index) => {
          return <FoodBox key={index} foodie={foodie} />;
        })}
      </Row>
    </div>
  );
}

export default App;
