// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/Searchbar';

function App() {
  const [food, setFoods] = useState([...foods]);

  const addFood = (newFood) => {
    const updatedFoodList = [...food, newFood];
    setFoods(updatedFoodList);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchList = food.filter((foodItem) =>
    foodItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const foodBox = searchList.map((foodItem) => {
    // console.log('FoodBox Food Item', foodItem);
    return <FoodBox key={foodItem.name} food={foodItem} />;
  });

  return (
    <div className="App">
      <Searchbar search={searchTerm} onSearch={handleSearch} />

      <div className="add-form">
        <AddFoodForm addFood={addFood} />
      </div>
      <h1>Food List</h1>

      <div className="boxes-container ">{foodBox}</div>
    </div>
  );
}
export default App;
