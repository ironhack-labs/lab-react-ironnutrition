import logo from './logo.svg';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const  [food, setFood]  = useState(foods);
  console.log({food});



  return (
    <div className="App">
      <h2>Food List</h2>
      
      {food.map((food) =>
        <FoodBox
      food={food} />
        )}



      
    </div>
  );
}

export default App;
