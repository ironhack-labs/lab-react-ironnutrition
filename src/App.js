import FoodBox from '../src/components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';
import { useState } from 'react';
import foodsData from './foods.json';
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
    setFoods((state) => [food, ...state]);
    setAllFoods((state) => [food, ...state]);
  };

  const toggleFormVisibility = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className="App">
      <button className="form-button" onClick={toggleFormVisibility}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </button>
      {showForm && <AddFoodForm addNewFood={addNewFood} />}
      <br />
      <SearchBar searchFoods={searchFoods} />
      <br />
      <FoodBox foods={foods} />
    </div>
  );
}

export default App;
