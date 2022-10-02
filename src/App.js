import logo from './logo.svg';
import './App.css';
import foodsJson from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox.js';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  function deleteFoodByFoodName(foodName) {
    let filteredFoods = foods.filter((food) => food.name !== foodName);
    setFoods(filteredFoods);
  }

  function addFoodByFood(food) {
    setFoods([...foods, food]);
  }

  function searchFoodContains(searchTerm) {
    let filteredFoods = foodsJson.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoods(filteredFoods);
  }

  const listFoods = () => {
    return foods.map((food) => {
      return <FoodBox food={food} onDeleteFood={deleteFoodByFoodName} />;
    });
  };

  const addFood = () => {
    const newFood = {
      name: 'Orange',
      calories: 85,
      image: 'https://i.imgur.com/abKGOcv.jpg',
      servings: 1,
    };

    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={(food) => addFoodByFood(food)} />
      <Search onSearchFood={(searchTerm) => searchFoodContains(searchTerm)} />
      {listFoods()}
    </div>
  );
}

export default App;
