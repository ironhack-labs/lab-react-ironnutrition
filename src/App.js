import React, { useState } from 'react';
import foodsData from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleDeleteFood = (id) => {
    setFoods(foods.filter((food) => food._id !== id));
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search onSearch={handleSearch} />

      <AddFoodForm onAddFood={handleAddFood} onSearch={handleSearch} />

      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1
        }}
      />

      {filteredFoods.map((food) => (
        <div key={food._id}>
          <FoodBox key={food._id} food={food} onDelete={handleDeleteFood} />
        </div>
      ))}
    </div>
  );
}

export default App;
