import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import foodsFromJson from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [foodItems, setFoodItems] = useState(foodsFromJson);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddFood = (newFood) => {
    setFoodItems([newFood, ...foodItems]);
  };

  const handleDeleteFood = (name) => {
    const filteredFoods = foodItems.filter((food) => food.name !== name);
    setFoodItems(filteredFoods);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFoodItems = foodItems.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AddFoodForm onAddFood={handleAddFood} />
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="wrap">
        {filteredFoodItems.map((food) => (
          <FoodBox
            key={food.name}
            food={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings,
            }}
            onDeleteFood={handleDeleteFood}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
