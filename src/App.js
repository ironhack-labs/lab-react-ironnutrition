import './App.css';
import foods from "./foods.json";
import { useState } from "react";
import Foodbox from "./components/Foodbox";
import { Card, Button, Col, Divider, Input, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';


function App() {

  const [foodList, setFoodList] = useState(foods);

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood])
  }

  return (
    
<div className="App">
<Row>
  <Col span={12} offset={6}>
    <h1>IronNutrition</h1>
   
    <Divider>Add Food Entry</Divider>
    <AddFoodForm addFood={addFood}/>

    <Divider>Food List</Divider>
    {foodList.map((food, index) => (

      <Foodbox key={index} foodDetails={food}/>
))}
  </Col>
</Row>
</div>
  );
}


export default App;

