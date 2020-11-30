import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodForm from './components/FoodForm/FoodForm';
import FoodList from './components/FoodList/FoodList';
import SearchBar from './components/SearchBar/SearchBar';
import CaloriesList from './components/CaloriesList/CaloriesList';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [foodList, setFoodList] = useState(foods);
  const [searchValue, setSearchValue] = useState('');
  const [selectedFood, setSelectedFood] = useState([]);
  console.log(foodList);
  const handleAddFood = (formData) => {
    formData.calories = parseInt(formData.calories);
    formData.quantity = 0;
    setFoodList([...foodList, formData]);
    setShowForm(false);
  };

  const handleAddSelectedFood = (newFood) => {
    const selectedFoodCopy = [...selectedFood];
    let existFoodIndex = selectedFoodCopy.findIndex((food) => food.name === newFood.name);
    existFoodIndex !== -1
      ? (selectedFoodCopy[existFoodIndex].quantity = newFood.quantity)
      : selectedFoodCopy.push(newFood);
    setSelectedFood(selectedFoodCopy);
  };

  return (
    <div className="App">
      <button onClick={() => setShowForm(!showForm)}>Toggle form</button>
      {showForm ? <FoodForm handleAddFood={handleAddFood}></FoodForm> : null}

      <div className="main-container">
        <div className="foodList-container">
          <div className="foodList-searchbar">
            <label>Search food </label>
            <SearchBar value={searchValue} setSearchValue={setSearchValue}></SearchBar>
          </div>
          <div className="foodList-map-container">
            {foodList.map((food, i) =>
              food.name.toLowerCase().includes(searchValue) ? (
                <FoodList
                  key={i}
                  food={food}
                  handleAddSelectedFood={handleAddSelectedFood}
                ></FoodList>
              ) : null
            )}
          </div>
        </div>

        <CaloriesList foodList={selectedFood}></CaloriesList>
      </div>
    </div>
  );
}

export default App;
