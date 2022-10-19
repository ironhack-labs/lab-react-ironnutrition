import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import foodsArr from './foods.json';
import { useState } from 'react';

function App() {

  const [listOfFoods, setListOfFoods] = useState(foodsArr);

  return (
    <div className="App">
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foodsArr.map((food) => (
          <FoodBox foods={listOfFoods} food={food} />

        ))}
      </Row>
      </div>
  );
}

export default App;
