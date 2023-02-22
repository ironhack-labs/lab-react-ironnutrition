import './App.css';
import foodsJSON from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodsJSON)

  return (
    <div className="App">
      {foods.map(food => {
        return (
    <div>
  <p> {food.name} </p>
  <img src={food.image} width={100} />
  </div>)
      })}
    </div>
  );
}

export default App;
