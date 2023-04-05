import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFoodForm'
import Search from './components/Search'

import { Card, Row, Col, Divider, Input, Button } from 'antd';


function App() {
const [foodArr, setFoodArr] = useState(foods);


  const addFood = (newFood) => {
    setFoodArr((prevFoodArr) => {
      const newList = [newFood, ...prevFoodArr];
      return newList;
    });
  };
  
    const deleteFood = (foodName) => {
      const newList = foodArr.filter(
        (foodDetails) => foodDetails.name !== foodName
      );
      setFoodArr(newList);
    };

return (
  <div className="App">

    <AddFood callbackToAdd={addFood} />
    {foodArr.map((food) => (
      <FoodBox food={food} callbackToDelete={deleteFood} />
    ))}
  </div>
);
    }


export default App;
