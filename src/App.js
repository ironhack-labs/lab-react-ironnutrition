import { useState } from 'react';
import foods from './foods.json';
import './App.css';
//import { Card, Row, Col, Divider, Input, Button } from "antd"
import { Card, Divider } from 'antd';

function App() {
  const [foodsToDisplay, setfoodsToDisplay] = useState(foods);

  return (
    <div className="App">
      <Divider>Food List</Divider>
      {foodsToDisplay.map((foodie) => {
        return (
          <Card>
            <p> {foodie.name} </p>
            <img src={foodie.image} alt={foodie.title} width={80} />
          </Card>
        );
      })}
    </div>
  );
}

export default App;
