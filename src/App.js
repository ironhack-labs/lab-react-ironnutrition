import React, { useState } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import FoodBox from './components/FoodBox/FoodBox';
import './App.css';
import foods from './foods.json';

function App() {
  console.log(foods);
  const [allFoods, setFoods] = useState(foods);
  const [searchField, setSearchField] = useState('');

  console.log('SEARCHFIELD', searchField);

  const filteredFoods = allFoods.filter((food) => {
    return food.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="container">
      <SearchBox handleChange={handleChange} />
      <FoodBox foods={filteredFoods} />
    </div>
  );
}

export default App;
