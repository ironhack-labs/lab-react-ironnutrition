// src/App.js
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row } from 'antd';


function App() {

  const [foodList, setFoodList] = useState(foods);

  return <div className="App">
  <h1>Food List</h1>
    <Row style={{ justifyContent: 'center', width: '100%' }}>
      {foodList.map((food) => <FoodBox key={food.name} food={food} />)}
    </Row>
  </div>
}

export default App;
