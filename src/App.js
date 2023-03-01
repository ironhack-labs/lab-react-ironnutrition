import logo from './logo.svg';
import './App.css';
import Foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(Foods.slice(0, 9));
  return (
    <div className="App">
      {foods.map((food) => {
        return <FoodBox {...food} />;
      })}
    </div>
  );
}

export default App;
