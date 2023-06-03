// src/App.js
import './App.css';
import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsDataJSON from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsDataJSON);
  console.log(foods)

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map(food => {
        return <FoodBox food={food}/>
        })}
      </Row>
    </div>
  );
}
export default App;
