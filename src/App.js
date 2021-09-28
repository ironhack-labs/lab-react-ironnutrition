import React, { useState, useEffect } from 'react';
import './App.css';
import Foods from './foods.json';
import Foodbox from './components/Foodbox';
import Search from './components/Search';

function App() {
  const [isVisible, setIsVisible] = useState();
  const [allFoods, setAllFoods] = useState([...Foods]);
  const [isName, setIsName] = useState('');
  const [isCalories, setIsCalories] = useState('');
  const [isSearch, setIsSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleClick = () => {
    setIsVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVisible(false);

    const newFood = { name: isName, calories: isCalories };
    setAllFoods(allFoods.concat([newFood]));
  };

  const getSearchQuery = (data) => {
    setIsSearch(data);
    console.log('data', data);
  };

  useEffect(() => {
    const results = allFoods.filter((singleFood) =>
      singleFood.name.includes(isSearch)
    );
    setSearchResults(results);
  }, [allFoods, isSearch]);

  return (
    <div>
      <Search getSearchQuery={getSearchQuery} />
      {searchResults.map((food) => {
        return (
          <Foodbox
            key={food.name}
            foodTitle={food.name}
            foodCalories={food.calories}
            foodImg={food.image}
            quantity={food.quantity}
          />
        );
      })}
      <button onClick={handleClick}>Add new Food</button>
      {isVisible && (
        <form onSubmit={handleSubmit}>
          <label>Name of Food:</label>
          <input type="text" onChange={(e) => setIsName(e.target.value)} />
          <label>Calories of Food:</label>
          <input type="text" onChange={(e) => setIsCalories(e.target.value)} />
          <button type="submit">Add Food</button>
        </form>
      )}
    </div>
  );
}

export default App;
