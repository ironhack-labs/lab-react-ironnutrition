// src/App.js
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
//import FoodList from './Component/FoodList';

import food from "./foods.json"

import FoodBox from './Component/FoodBox';
import AddFoodForm from './Component/AddFoodForm';
import Search from './Component/Search';

function App () {
  const [foodList, setFoodList] = useState(food)

  const addFood = (food)=>{
    const updateFoods = [food, ...foodList];
    setFoodList(updateFoods);
  };

  const [filteredFoods, setFilteredFoods] = useState(food);

  const handleSearch = (filteredFoods) => {
    setFilteredFoods(filteredFoods);
  }; 
  const handleDelete = (foodToDelete) => {
    const updatedFoods = foodList.filter((food) => food !== foodToDelete);
    setFoodList(updatedFoods);
    setFilteredFoods(updatedFoods);
  };
  
  return(
  <div>
      <AddFoodForm addFood={addFood}/>

      <Search foodList={foodList} onSearch={handleSearch} />

      
    
    <div className="App">
      <div>
        {foodList.map((food) => (
         <FoodBox food={food}/>
        ))}
      </div>
    </div>
  </div>
  )
  
}
export default App;