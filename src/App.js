import foods from './foods.json';
import { useState } from 'react';
import './App.css';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import { Divider, Input } from 'antd';
import Search from './Components/Search/Search';

function App() {
  const [displayFood, setDisplayFood] = useState(foods);


  const createdFood = (newFood) => {
    const updatedFood = [newFood, ...displayFood];
    setDisplayFood(updatedFood);

  }

  const searchFood = (search) => {
    const filteredFood = foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
    setDisplayFood(filteredFood);
  }

  const deleteFood = (foodName) => {
    const filteredFood = displayFood.filter(food => food.name !== foodName);
    setDisplayFood(filteredFood);
  }

  
  return (
    <div className="App">
    <Search searchFood={searchFood} />
      <AddFoodForm createdFood={createdFood} />
      <Divider>Food Log</Divider>
      {displayFood.map((foods, index) => {
        return <div key={index}>
        <FoodBox food={foods} deleteFoodBtn={deleteFood} />
        </div>
      })}
    </div>
  );
}


export default App;
