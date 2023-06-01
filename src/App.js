import logo from './logo.svg';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const  [food, setFood]  = useState(foods);
  



  return (
    <div className="App">
      <h1>Add a food to the list</h1>
      <AddFoodForm />
      <h2>Food List</h2>
      <div className="foodGroup">
      {food.map((food) =>
      <FoodBox
      food={food} />
        )}



      </div>
    </div>
  );
}

export default App;
