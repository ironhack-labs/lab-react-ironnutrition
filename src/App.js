// src/App.js
import './App.css';

import { useState } from 'react';
import foods from './foods.json';
import Foodbox from './components/FoodBox';

import { Row, Divider } from 'antd';

function App() {
  const [foodsArray, setFoodsArray] = useState(foods);

  return (
    <div className="App">

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsArray.map((foodObj) => {
          return <Foodbox foodItem={foodObj} />;
        })}
      </Row>
    </div>
  );
}
export default App;
