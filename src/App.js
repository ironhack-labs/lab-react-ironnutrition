// src/App.js
import './App.css';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

function App() {

    const [foodList, setFoodList] = useState(foods)

    

  return (
  
  <div className="App">
  
  <h1>Food List</h1>

  {foodList.map((food) => {
    return (
    <div>

    <p>{ food.name }</p>
    <img style={{height: "100px"}} src={ food.image} alt="food"/>

    </div>

    )
  })}


  </div>

  )
}


export default App;