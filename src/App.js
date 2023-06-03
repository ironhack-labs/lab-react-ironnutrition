import logo from './logo.svg';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const  [food, setFood]  = useState(foods);
  

const 

  return (
    <div className="App">
      <h2>Add a food to the list</h2>
      <AddFoodForm addFood={addNewFood} setFood={setFood} />
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
