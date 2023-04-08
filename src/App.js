import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodNames, setFoodNames] = useState(foods);

  const addFood = newFood => {
    setFoodNames([...foodNames, newFood])
  }

  return (
    <div className="App">
      <AddFoodForm foodNames={foodNames} addFood={addFood}/>
      <FoodBox foodNames={foodNames} />
    </div>
  );
}

export default App;
