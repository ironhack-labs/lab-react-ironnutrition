import './App.css';
import foods from "./foods.json";
import { useState } from 'react';

import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from "./Components/Search";

function App() {

  const [food, setFood] = useState(foods);

  const addNewFood = (newFood)=>{
    const updatedFoods = [...food, newFood];
    setFood(updatedFoods);
};

  return (
    <div>
        <AddFoodForm addNewFood={addNewFood}/>
    {
    foods.map((food)=>{
      return <FoodBox key={food._id} food={food}/>
    })
  }</div>
  );
}

export default App;
