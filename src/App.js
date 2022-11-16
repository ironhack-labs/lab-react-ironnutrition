import './App.css';
import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Row } from 'antd';

function App() {
  const [plates, setPlates] = useState(foods);
  const [showPlates, setShowPlates] = useState(foods);


  const deleteFood = (name) => {
    const filteredFoods = plates.filter((food) => food.name !== name);
    setPlates(filteredFoods);
    setShowPlates(filteredFoods);
  };

  const createFood = (newFood) => {
    const upDatedFood = [newFood, ...plates]
    setPlates(upDatedFood)
  }

  const searchFood = (searchQuery) => {
    const filteredFoods = plates.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setPlates(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />

      <SearchBar filterFoods={searchFood} />


      <Row>
        {plates.map((plate) => {
          return (
            <FoodBox food={plate} key={plate.name} plate={plate} deleteFood={deleteFood} />
          )
        })}
      </Row>
    </div>
  );

}

export default App;
