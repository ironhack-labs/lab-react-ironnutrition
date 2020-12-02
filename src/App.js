import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {
  const [formDisplay, setFormDisplay] = useState(false);
  const [foodList, setFoodList] = useState(foods);
  const [search, setSearch] = useState('');
  
  const toggleForm = () => {
    const clicked = !formDisplay;
    setFormDisplay(clicked);
  };

  const addNewFood = (newFoodObj) => {
    console.log('function called');
    const foodsCopy = [newFoodObj, ...foodList];
    setFoodList(foodsCopy);
    toggleForm();
  };

  useEffect(() => {
    const foodCopy = [...foodList];
    const filteredFood = foodCopy.filter((food) => food.name.includes(search));
    setFoodList(filteredFood);
  }, [search]);

  return (
    <div className="App">
      <form>
        <input
          value={search}
          className="input is-info"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <button onClick={toggleForm} className="button is-info">
        {!formDisplay ? 'Show Add Food Form' : 'Hide Form'}
      </button>
      {formDisplay ? (
        <div className="AddFoodForm">
          <AddFood addFood={addNewFood} />
        </div>
      ) : null}

      <div className="foodBoxes">
        {foodList.map((item) => {
          return <FoodBox key={item.name} food={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
