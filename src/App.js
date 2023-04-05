import { useState } from 'react';
import './App.css';
import foods from './foods.json';

import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
let foodsFromJson= foods;
const [foodArr, setFoodArr] = useState(foodsFromJson);

return (
  <div>
    {foodArr.map((food) => (
      <div key={food.id}>
        <p>{food.name}</p>
        <img src={food.image} width={200} alt={food.name} />
      </div>
    ))}
  </div>
);
    }


export default App;
