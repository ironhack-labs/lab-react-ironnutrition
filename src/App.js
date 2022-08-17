import './App.css';
import FoodList from './Components/FoodList/FoodList';
import foodData from './foods.json';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import Searchbar from './Components/SearchBar/SearchBar';
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodData);
  const [displayFoods, setDisplayFoods] = useState(foodData);

  const createFood = (food) => {
    const updatedFoods = [food, ...foods];
    setFoods(updatedFoods);
    setDisplayFoods(updatedFoods);
  };

  const searchResults = (searchStr) => {
    let filteredFoods = foods.filter((foods) =>
      foods.name.toLowerCase().includes(searchStr.toLowerCase())
    );
    setDisplayFoods(filteredFoods);
  };

  const deleteFood = (foodName) => {
    let filteredFoods = foods.filter((foods) => foods.name !== foodName);
    setFoods(filteredFoods);
    setDisplayFoods(filteredFoods);
  };

  return (
    <div className="App">
      <Searchbar searchResults={searchResults} />
      <AddFoodForm createFood={createFood} />
      <FoodList foods={displayFoods} deleteFood={deleteFood} />
    </div>
  );
}

export default App;
