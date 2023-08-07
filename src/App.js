// src/App.js
import React, {useState} from 'react';
import './App.css';
import foodsData from "./foodsData.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [foods, setFoods] = useState(foodsData);

  //IT4
  const handleAddFood = (newFood) => {
    setFoods((prevFoods) => [...prevFoods, newFood]);
  };

  //IT 5
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFood = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //IT 6
  const handleDelete = (foodToDelete) => {
    const updatedFoods = foods.filter((food) => food.name !== foodToDelete.name);
    setFoods(updatedFoods);
  };
  
 
  return (
    <div>
    
      <div>
         <h1>Add Food Entry</h1>
        <AddFoodForm onAddFood={handleAddFood} />
      </div>

      <h1>Food List</h1>
      <SearchBar searchQuery={searchQuery} onSearch={handleSearchChange} />

      <div className='food-container'>
        {filteredFood.map((food) => (
          <div key={food.name}>
            <FoodBox food={food} onDelete={() => handleDelete(food)} />
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default App;
