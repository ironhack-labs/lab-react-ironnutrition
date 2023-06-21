import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';


function App() {

  const [foodToDisplay, setFoodToDisplay] = useState(foods);

  return (
    <div className="App">
      {foodToDisplay.map((food) => {
        return (
        <FoodBox oneFood={food}/>
        );
      })}
    </div>
  );
}

export default App;
