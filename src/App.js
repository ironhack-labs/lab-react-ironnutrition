import React, { useState } from 'react';
import foods from "./foods.json";
import './App.css';
import FoodBox from './Components/Foodbox';
import AddFoodForm from './Components/AddForm';
import Search from './Components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const handleDelete = (index) => {
    const updatedFoodList = [...foodList];
    updatedFoodList.splice(index, 1);
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFilteredFoodList([...foodList, newFood]);
  };

  const handleSearch = (searchTerm) => {
    const filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoodList(filteredFoods);
  };

  return (
    <div className="app">
      <AddFoodForm onAddFood={handleAddFood} />

      <Search onSearch={handleSearch} />

      {filteredFoodList.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
}

export default App;
