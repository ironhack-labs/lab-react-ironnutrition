import './App.css';
import { useState } from 'react';
import foods from './foods.json';
//import { Card, Row, Col, Divider, Input, Button } from 'antd';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      {allFoods.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} alt={food.name} width={100} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
