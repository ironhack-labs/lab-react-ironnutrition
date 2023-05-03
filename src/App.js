import './App.css';
//import foods from './foods.json';
import React, { useState } from 'react';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Row, Divider, Button } from 'antd';
import NoFood from './NoFood';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const [query, setQuery] = useState('');

  const handleSearch = (query) => {
    setQuery(query);
    if (!query) {
      setFoodList(foods);
    } else {
      const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(query.toLowerCase())
      );
      setFoodList(filteredFoods);
    }
  };
  const handleDeleteFood = (foodIndex) => {
    const newFoodList = foodList.filter((food, index) => index !== foodIndex);
    setFoodList(newFoodList);
  };

  return (
    <div className="App">
      {showForm && <AddFoodForm onAddFood={handleAddFood} />}
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      <SearchBar query={query} onSearch={handleSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}

        {foodList.map((food, index) => (
          <FoodBox
            key={index}
            food={food}
            onDelete={() => handleDeleteFood(index)}
          />
        ))}
      </Row>
    </div>
  );
}

export default App;
