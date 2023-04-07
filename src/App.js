import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foodNames, setFoodNames] = useState(foods);

  return (
    <div className="App">
      <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
    {foodNames.map((food) => (
      <div>
        <p>{food.name}</p>
        <img src={food.image} width={50} alt={food.name}/>
      </div>
    ))}
    </div>
  );
}

export default App;
