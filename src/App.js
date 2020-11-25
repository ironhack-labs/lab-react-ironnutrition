import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import './App.css';
import Foodbox from './foodbox';
import AddFoodForm from './addfood';

function App() {
  const [foods, setFoods] = useState(foodList);
  const [showForm, setShowForm] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const toggleForm = () => setShowForm(!showForm);

  const addFoodHandler = (newFood) => {
    const foodCopy = [...foods];
    foodList.push(newFood);
    foodCopy.push(newFood);
    setFoods(foodCopy);
  };

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const searchFoods = (event) => {
    event.preventDefault();
    let foodCopy = [...foods];
    if (searchInput === '') {
      setFoods(foodList)
    } else {
      setFoods(
        foodCopy.filter((item) =>
          item.name.toUpperCase().includes(searchInput.toUpperCase())
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div className="foodWrapper">
        <div className="foodList">
          <form className="search" onSubmit={searchFoods}>
            <input
              type="text"
              placeholder="Search for food"
              onChange={handleSearchInput}
            />
          </form>
          {foods.map((item, index) => (
            <Foodbox key={index} food={item} />
          ))}
        </div>
        <div>
          <button onClick={() => toggleForm()}>Add food</button>
          {showForm ? (
            <AddFoodForm addFood={addFoodHandler} formToggler={toggleForm} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
