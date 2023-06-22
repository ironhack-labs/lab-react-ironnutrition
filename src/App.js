import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from "./components/FoodBox";
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  return (
    <div className="App">
          <Divider>Food List</Divider>

      {foodsToDisplay.map((foodObj, index) => {
        return (

          <header className="App-header">
              <div>
              <Row style={{ width: '100%', justifyContent: 'center' }}>
                <h1> {foodObj.name} </h1>
                </Row>
<div>
  <FoodBox foodDetails= {foodObj} />
</div>
              </div>
          </header>
        );
      })}
    </div>
  );
}

export default App;
