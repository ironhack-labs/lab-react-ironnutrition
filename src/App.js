// src/App.js
import './App.css';

import { useState } from 'react';

import foods from './foods.json';

import Foodbox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import { Row, Divider } from 'antd';

function App() {
  const [foodsArray, setFoodsArray] = useState(foods);
  const [filterFoodsArray, setFilterFoodsArray] = useState(foods);

  const addFood = (newFood) => {
    setFoodsArray((prevFoodArray) => {
      return [newFood, ...prevFoodArray];
    });
    setFilterFoodsArray((prevFoodArray) => {
      return [newFood, ...prevFoodArray];
    });
  };

  const searchFood = (searchValue) => {
    setFilterFoodsArray(
      foodsArray.filter((element) =>
        element.name.toLowerCase().includes(searchValue.target.value.toLowerCase())
      )
    );
  };

  const deleteFood = (value) => {
    const foodlist = [...foodsArray]
    foodlist.splice(value, 1)
    setFoodsArray (foodlist)
    setFilterFoodsArray (foodlist);
  };

  return (
    <div className="App">
      <Divider>Add Food Entry</Divider>

      <AddFoodForm callbackNewFood={addFood} />

      <Divider>Search</Divider>

      <Search callbacSearchFood={searchFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filterFoodsArray.map((foodObj, index) => {
          return <Foodbox key={index} keyItem= {index} foodItem={foodObj} callbackToDelete={deleteFood} />;
        })}
      </Row>
    </div>
  );
}
export default App;
