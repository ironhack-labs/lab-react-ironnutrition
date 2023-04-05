import { Card, Row, Col, Divider, Input, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const foodListCopy = [...foodList];

  const addFood = (newFood) => {
    setFoodList((prevFoodList) => {
      const newList = [newFood, ...prevFoodList];
      return newList;
    });
  };

  const searchFilter = (searchFood) => {
    const newList = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchFood.toLowerCase());
    });
    setFoodList(newList);
  };

  const deleteFood = (foodName) => {
    console.log("deleting",foodName)
    const newList = foodList.filter( foodDetails => foodDetails.name !== foodName );
    setFoodList(newList);
  }

  return (
    <div className="App">
      <div>
      <AddFoodForm callbackToAdd={addFood} />
      <Search searchFilter={searchFilter} />
      </div>
      {foodListCopy.map((foodListObj) => {
        return (
          <>
            <FoodBox foodDetails={foodListObj} callbackToDelete={deleteFood} />
          </>
        );
      })}
    </div>
  );
}

export default App;
