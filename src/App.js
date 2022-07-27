import './App.css';
import foodsData from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {useState} from 'react'


function App() {

  const [foods, setFood] = useState(foodsData)

  return (
    <div className="App">
      <h1>Food List</h1>
      {foods.map((food, index) => (
        <div key={index} >
          <p> {food.name} </p>
          <img src={food.image} width={0} alt="food" />
        </div>
      ))}
    </div>
  );
}

export default App;
