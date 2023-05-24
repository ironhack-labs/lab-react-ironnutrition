import { useState } from 'react';
import foods from "./foods.json";
import './App.css';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodFilterData, setFoodFilterData] = useState(foods); 

  const addNewFood = (newFood) => {
    const updatedFood = [...foodList, newFood];
    setFoodList(updatedFood);
  }

  const deleteFood = (name) => {
    const updatedFoodList = foodList.filter((item) => item.name !== name);
    setFoodList(updatedFoodList);
    setFoodFilterData(updatedFoodList);
  };

  let filterFoodList = (str) => {
    let filteredFood;
    if (str === "") {
      filteredFood = foodList;
    } else {
      filteredFood = foodList.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setFoodFilterData(filteredFood);
  };
  
  return (
    <div>
      <Search searchFood={filterFoodList} />
      <AddFoodForm addNewFood={addNewFood} />
    
      {foodFilterData.map((food) => (
        <FoodBox key={food.name} food={food} onDelete={deleteFood} />
      ))}
    </div>
  );
}

export default App;
