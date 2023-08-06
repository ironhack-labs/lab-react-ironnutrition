import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { isVisible } from '@testing-library/user-event/dist/utils';

function App() {
  const foodsId = foods.map((food) => ({...food, id: uuidv4(),}));  
  const [allFoods, setAllFoods] = useState(foodsId);
  const [filteredFoods, setFilteredFoods] = useState(allFoods);
  const [formVisible, setFormVisible] = useState(false);

  const handleAddFood = (newFood) => {
    const newFoodId = {...newFood, id: uuidv4()};
    setAllFoods([...allFoods, newFoodId]);
    handleFormVisibility();
  };

  const handleDeleteFood = (foodId) => {
    const updatedFoods = allFoods.filter((food) => food.id !== foodId);
    setAllFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  const handleSearch = (search) => {
    const filtered = allFoods.filter((food) => 
    food.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  const handleFormVisibility = () => {
    setFormVisible(!formVisible);
  }

  return (
    <div className="App">
    <button onClick={handleFormVisibility}>
      {formVisible ? 'Hide Form' : 'Add New Food'}
    </button>
    {formVisible && <AddFoodForm onAddFood={handleAddFood} /> }
    <Search onSearch={handleSearch} />
    { filteredFoods.length === 0 ? (
        <p>No food item available!</p>
      ) : ( filteredFoods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onDelete={handleDeleteFood}
        />
      ))
    )}
    </div>
  );
}

export default App;
