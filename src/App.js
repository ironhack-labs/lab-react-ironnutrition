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

  const handleAddFood = (formData) => {
    setFoodList([...foodList, formData]);
    setShowForm(false);
  };

  const handleAddSelectedFood = (newFood) => {
    const selectedFoodCopy = [...selectedFood];
    let existFoodIndex = selectedFoodCopy.findIndex((food) => food.name === newFood.name);
    //console.log('BEFORE MODIFICATION: ', selectedFoodCopy);
    existFoodIndex !== -1
      ? (selectedFoodCopy[existFoodIndex].quantity = newFood.quantity)
      : selectedFoodCopy.push(newFood);
    //console.log('AFTER MODIFICATION: ', selectedFoodCopy);
    setSelectedFood(selectedFoodCopy);
  };

  useEffect(() => {
    //console.log(selectedFood);
  }, [selectedFood]);

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
          <div class="foodList-map-container">
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
