import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';
import Search from 'antd/es/transfer/search';


function App() {

  const [foodToDisplay, setFoodToDisplay] = useState(foods.slice(0, 5));

  const createFood = (newFood) => {
    const newList = [newFood, ...foodToDisplay];

    // update state
    setFoodToDisplay(newList);
  }

  return (
    <div className="App">
      <Search />
      <AddFoodForm callbackToCreate={createFood}/>

      {foodToDisplay.map((food) => {
        return (
        <FoodBox oneFood={food}/>
        );
      })}
    </div>
  );
}

export default App;
