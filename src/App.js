import './App.css';
import foodsJSON from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsJSON)

  return (
    <div className="App">
     <h1>Foodlist</h1>
     <Row gutter={256}>
      {foods.map(food => {
        return (
    <div className='foodlist'>
 <FoodBox food={food} />
  </div>)
      })}
      </Row>



{/* <p> {food.name} </p>
  <img src={food.image} width={0} /> */}

    </div>
  );
}

export default App;
