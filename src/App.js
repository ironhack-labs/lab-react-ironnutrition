import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox.js';
import AddFood from './components/AddFood.js';





function App() {
    

    const [form, setForm ] = useState(false)
    const [search, setSearch] = useState('')
    const [foods, setFoods] = useState(foodsArr)

  function addNewFood(food) {
    return [...foods, food]
  }

  function handleSearchInput(e) {
    setSearch(e.target.value)
  }

  const searchFoods = (event) => {
    event.preventDefault();
    let foodCopy = [...foodsArr];
    if (search === '') {
      setFoods(foodCopy)
    } else {
      setFoods(
        foodCopy.filter((item) =>
          item.name.toUpperCase().includes(search.toUpperCase())
        )
      );
    }
  };

  return (
    <div>
    <h1>IronNutrition</h1>
      <div className="foodWrapper">
        <div className="foodList">
          <form className="search" onSubmit={searchFoods}>
            <input
              type="text"
              placeholder="Search for food"
              onChange={handleSearchInput} />
              <button type="submit">Search</button>
          </form>
    {form && <AddFood addNewFood={addNewFood}/>} 
    <button onClick={() => setForm(!form)} >Add food</button>
    {foods.map(f => (<FoodBox name={f.name} calories={f.calories} image={f.image} quantity={f.quantity} />))}
    </div>
    </div>
    </div>
  );
}

export default App;
