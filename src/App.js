import './App.css';
import { useState } from 'react';
import foodData from './foods.json';
import FoodCard from './components/FoodCard/FoodCard';
import AddFood from './components/AddFood/AddFood';
import Searchbar from './components/Search/Search';

function App() {
  const [foods, setFoods] = useState(foodData);
  const [searchedFoods, setSearchedFoods] = useState(foodData);

  const createdFood = (newFood) => {
    const updatedFoods = [newFood, ...foods];
    setFoods(updatedFoods);
    setSearchedFoods(updatedFoods);
  };

  const filterFood = (search) => {
    const foodSearch = foods.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchedFoods(foodSearch);
  };

  const deleteFood = (deleted) => {
    const filteredFoods = foods.filter(({ name }) => name !== deleted);
    setFoods(filteredFoods);
    setSearchedFoods(filteredFoods);
  };

  return (
    <div className="App">
      <Searchbar filterFood={filterFood} />
      <AddFood createdFood={createdFood} />
      {searchedFoods.map((food) => (
        <FoodCard key={food.name} food={food} deleteFood={deleteFood} />
      ))}
    </div>
  );

}

export default App;
