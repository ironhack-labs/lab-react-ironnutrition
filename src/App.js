import FoodBox from '../src/components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';
import { useState } from 'react';
import foodsData from './foods.json';
import { Button } from 'antd';
import SearchBar from './components/SearchBar';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [allFoods, setAllFoods] = useState(foodsData);
  const [showForm, setShowForm] = useState(false);

  const searchFoods = (event) => {
    const selectedValue = event.target.value.toLowerCase();
    let nextFoods = allFoods.filter((food) =>
      food.name.toLowerCase().includes(selectedValue)
    );
    setFoods(nextFoods);
  };

  const addNewFood = (food) => {
    food._id = food.name + Math.random();
    setFoods((state) => [...state, food]);
    setAllFoods((state) => [...state, food]);
  };

  const toggleFormVisibility = () => {
    setShowForm((prevState) => !prevState);
  };

  const deleteFood = (foodId) => {
    const updatedFoods = foods.filter(food => food.name !== foodId);
    setFoods(updatedFoods);
};

  return (
    <div className="App">
      <Button className="form-button" onClick={toggleFormVisibility}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      {showForm && <AddFoodForm addNewFood={addNewFood} />}
      <br />
      <SearchBar searchFoods={searchFoods} />
      <br />
      <FoodBox foods={foods} deleteFood={deleteFood} />
    </div>
  );
}

export default App;
