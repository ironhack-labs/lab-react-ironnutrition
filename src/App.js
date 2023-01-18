import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodsFromJson, setFoods] = useState(foods);
  const foodsList = [...foodsFromJson];
  
  const createFood = (newFoodObj) => {
    setFoods((prevListOfFoods) => {
      const newList = [newFoodObj, ...prevListOfFoods];
      return newList;
    });
  }

  const deleteFood = (foodName) => {
   
    const newListOfFoods = foodsList.filter((food) => {
      return food.name !== foodName;
    })

    //update state
    setFoods(newListOfFoods);
  }

  return (
    <div className="App">
      <AddFoodForm callbackToCreate ={createFood}/>
      {foodsList.map((food) => {
        return (
          
            <FoodBox 
              foodList={food} 
              callbackToDelete={deleteFood}/>
          
        );
      })}
    </div>
  );
}

export default App;
