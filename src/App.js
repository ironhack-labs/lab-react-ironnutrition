import React, { useState } from 'react';
import foodsData from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(true);

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (foodToDelete) => {
    setFoods(foods.filter((food) => food.name !== foodToDelete));
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      {showForm && <AddFoodForm onAddFood={addFood} />}

      <Button onClick={handleToggleForm}>
        {showForm ? 'Hide' : 'Add food...'}
      </Button>

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <div className="foods-container">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodBox
              className="food-box"
              key={food.name}
              food={food}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>Nothing to show here...</p>
        )}
      </div>
    </div>
  );
}

export default App;
