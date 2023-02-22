// src/App.js
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <h1>Food List</h1>
      {food.map((item) => {
        return (
          <div>
            <p> {item.name} </p>
            <img src={item.image} width={0} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
