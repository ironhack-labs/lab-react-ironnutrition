// src/App.js
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import './App.css';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
// import { Card, Col, Button } from 'antd';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  console.log(foods);
  const addFood = (newFood) => {
    setFoodsArr((prevFoodsArr) => {
      const newList = [newFood, ...prevFoodsArr];
      return newList;
    });
  };

  const searchFilter= (searchFood) => {
    const newList= foodsArr.filter((food) => {
      return food.name.includes(searchFood) 
    })
    setFoodsArr(newList);
  }

  const deleteFood= (foodName) => {
    const newList = foodsArr.filter(foodDetails => foodDetails.name !== foodName
    );
    setFoodsArr(newList)
  }
  return (
    <div className="App">
      <Search searchFilter={searchFilter}></Search>
      <AddFoodForm callbackToAdd={addFood} />

      {foodsArr.map((food) => {
        return <FoodBox key={food.name} food={food} callbackToDelete={deleteFood} />;
      })}
    </div>
  );
}
export default App;
