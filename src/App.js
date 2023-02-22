import './App.css';
import foodsJSON from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsJSON)

  return (
    <div className="App">
      {foods.map(food => {
        return (
    <div>
  <p> {food.name} </p>
  <img src={food.image} width={0} />
  </div>)
      })}

<FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />


    </div>
  );
}

export default App;
