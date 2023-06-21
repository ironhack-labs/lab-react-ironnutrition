import { useState } from 'react';
import foods from './foods.json';
import './App.css';
//import { Card, Row, Col, Divider, Input, Button } from "antd"
import { Divider, Row } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);
  const [search, setSearch] = useState('');

  const addFoodie = (newFoodie) => {
    const newList = [newFoodie, ...foodsToDisplay];
    setFoodsToDisplay(newList);
  };

  const filteredFoods = foodsToDisplay.filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <AddFoodForm callbackAdd={addFoodie} />

      <Search search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoods.map((foodie, index) => {
          return <FoodBox key={index} foodie={foodie} />;
        })}
      </Row>
    </div>
  );
}

export default App;
