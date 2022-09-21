// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import { Row, Divider, Button } from 'antd';

import foods from './foods.json';

function App() {
  const [foodsList, setFoodsList] = useState(foods)
  const [stableList, setStableList] = useState(foods)

  const deleteFood = foodName => {
    const filteredFoods = foodsList.filter(food => {
      return food.name !== foodName;
    });
 
    setFoodsList(filteredFoods);
    setStableList(filteredFoods);
  };

  let serchedFoods
  const searchFood = (str) => {
    const copyFoodList = [...stableList]
    if (str === '') {
      serchedFoods = copyFoodList
    } else {
      serchedFoods = copyFoodList.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase())
      })
    }
    setFoodsList(serchedFoods)
  };

  return (
    <div className="App">
      <AddFoodForm foodsList={foodsList} setFoodsList={setFoodsList} stableList={stableList} setStableList={setStableList}/> 

      <Button> Hide Form / Add New Food </Button>

      <Search searchFood={searchFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsList.map(food => 
          <FoodBox food={food} key={uuid()} deleteFood={deleteFood} />
        )}
      </Row>
      

    </div>
  );
}

export default App;
