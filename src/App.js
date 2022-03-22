import React from 'react';
import './App.css';
import foods from './foods.json';
import foodArr from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFood from './components/AddFood';

function App() {
  const [foods, setFoods] = useState(foodArr);
  const [displayForm, setDisplayForm] = useState(false);

  function toggleFormDisplay() {
    setDisplayForm(!displayForm);
  }

  function addFood(newFood) {
    setFoods([newFood, ...foods]);
  }

  return (
    <div className="App">
      <button className="button is-info m-3" onClick={toggleFormDisplay}>
        {displayForm ? 'CloseForm' : 'AddFood'}
      </button>

      {displayForm && (
        <AddFood addFood={addFood} toggleFormDisplay={toggleFormDisplay} />
      )}

      {/* realizamos un .map de foods, añadimos componente con atributo valor food */}
      {foods.map((food, index) => (
        <FoodBox key={ index } food={food} />
      ))}
    </div>
  );
}

export default App;
