import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [listFoods, setFoods] = useState(foods);

  return (
    <div className="App">
      {listFoods.map((element) => {
        return (
          
            <FoodBox key={element.name} food={element}/>
          
        );
      })}
    </div>
  );
}

export default App;
