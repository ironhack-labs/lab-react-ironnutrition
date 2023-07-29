import React, { useState } from 'react';
import foodsData from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';



function App() {  
  const [foods, setFoods] = useState(foodsData);
  const [searchTerm, setSearchTerm] = useState('');

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  const filteredFoods = foods.filter(
    (food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={addFood} className="add-food-form"/>

      <SearchBar searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />


      <div className='foods-container'>
      {filteredFoods.map((food) => (
        <FoodBox key={food.name} food={food} className="food-box" />
      ))}
      </div>
    </div>
  );
}

export default App;
