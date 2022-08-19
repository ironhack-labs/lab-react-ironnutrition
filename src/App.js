import { useState } from 'react';
import './App.css';
import foodData from './foods.json';
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/Search';

function App() {
  const [foods] = useState(foodData);
  const [displayFood, setDisplayFood] = useState(foods);
  const [showForm, setShowForm] = useState(true);

  const hideForm = () => {
    setShowForm(false);
  };

  const showForms = () => {
    setShowForm(true);
  };

  const createdFood = (food) => {
    const updatedFoods = [food, ...displayFood];
    setDisplayFood(updatedFoods);
  };
  const searchFoods = (search) => {
    let filteredFoods = displayFood.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayFood(filteredFoods);
  };

  const deleteFood = (foodName) => {
    let filteredFoods = displayFood.filter((food) => food.name !== foodName);
    setDisplayFood(filteredFoods);
  };

  return (
    <div className="App">
      <h2>Food list</h2>
      <SearchBar searchResults={searchFoods} />
      {showForm ? (
        <>
          <button onClick={() => hideForm()}>Hide</button>
          <AddFoodForm createFood={createdFood} />
        </>
      ) : (
        <button onClick={() => showForms()}>Show</button>
      )}
      <FoodList foods={displayFood} deleteFood={deleteFood} />
    </div>
  );
}

export default App;